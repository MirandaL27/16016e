import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imageWrapper: {
    padding: '0px 0px 15px 15px'
  },
  imageBorder: {
    width: '100%',
    borderRadius: '10px 10px 0 10px'
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  wrapper: {
    width: '25%',
  }
}));

const ImageEl = (props) => {
  const { url, time } = props;
  const classes = useStyles();
  console.log(time);
  return (
    <Box className = {classes.wrapper}>
      <Typography className={`${classes.date}`}>{time}</Typography>
      <Box className = {classes.imageWrapper}>
        <Box className={classes.imageBorder} component="img" src={url} alt="image sent as message"></Box>
      </Box>
    </Box>
  );
};

export default ImageEl;