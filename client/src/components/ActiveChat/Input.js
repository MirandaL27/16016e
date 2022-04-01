import React, { useState } from 'react';
import { FormControl, FilledInput, Button, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';

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
    color: 'grey'
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const urlBase = "https://api.cloudinary.com/v1_1/dhtthnneo/image/upload";
    const urlArray = [];
    if (formElements[1].files) {
      for (let i = 0; i < formElements[1].files.length; i++) {
        console.log(formElements[1].files[i]);
        const imgData = new FormData();
          imgData.append("file", formElements[1].files[i]);
          imgData.append("upload_preset", "xax3k85s");

        fetch(urlBase, {
          method: "POST",
          body: imgData
        })
          .then(response => {
            return response.text();
          })
          .then(response => {
            console.log(response);
            urlArray.push(response.url);
          })
          .catch(error => {
            console.log(error);
          })
      }
    }

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      //add attachments here
      attachments: urlArray
    };
    await postMessage(reqBody);
    setText('');
  };
  //need to add an element to upload stuff here
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
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
                  />
                </Button>
              </InputAdornment>}
        />
      </FormControl>
    </form>
  );
};

export default Input;
