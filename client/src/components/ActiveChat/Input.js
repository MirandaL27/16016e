import React, { useState } from 'react';
import axios from "axios";
import { FormControl, FilledInput, Button, InputAdornment, SvgIcon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  uploadButton: {
    border: "none",
    boxShadow: "none",
    padding: 'none',
    backgroundColor: 'transparent',
    color: 'rgba(209, 217, 230, 1)',
    '&:hover': {
      border: "none",
      boxShadow: "none",
      padding: 'none',
      backgroundColor: 'transparent',
      color: 'grey'
    }
  },
  greyFont: {
    color: 'rgba(156, 173, 200, 1)'
  }
}));

const instance = axios.create();

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [upload, setUpload] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleFileUpload = (event) => {
    const fileList = [];
    const fileWord = (event.target.files.length === 1 ? 'File' : 'Files');
    for (let i = 0; i <event.target.files.length; i++) {
      fileList.push(event.target.files[i].name);
    }
    const uploadText = `${fileWord} to upload: ${fileList.join(", ")}`;
    setUpload(uploadText);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const urlBase = "https://api.cloudinary.com/v1_1/dhtthnneo/image/upload";
    const urlArray = [];
    if (formElements[1].files) {
      const promiseArr = [];
      for (let i = 0; i < formElements[1].files.length; i++) {
        const imgData = new FormData();
        imgData.append("file", formElements[1].files[i]);
        imgData.append("upload_preset", "xax3k85s");
        const response = instance.post(urlBase, imgData);
        promiseArr.push(response);
      }
      const responsesArr = await Promise.all(promiseArr);
      responsesArr.forEach(response => {
        urlArray.push(response.data.secure_url);
      })
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: (urlArray.length > 0 ? urlArray : null)
    };
    await postMessage(reqBody);
    setText('');
    setUpload('');
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography className = {classes.greyFont}>{upload}</Typography>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment=
          {<InputAdornment position="end">
            <SvgIcon component = {SentimentSatisfiedAltIcon} className = {classes.uploadButton}/>
            <Button
              className={classes.uploadButton}
              variant="contained"
              component="label"
            > 
              <AddToPhotosOutlinedIcon />
              <input
                type="file"
                multiple
                hidden
                onChange={handleFileUpload}
              />
            </Button>
          </InputAdornment>}
        />
      </FormControl>
    </form>
  );
};

export default Input;
