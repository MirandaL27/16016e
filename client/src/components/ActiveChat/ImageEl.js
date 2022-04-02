import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  border: {
    borderRadius: '10px 10px 0 10px',
  },
}));

const ImageEl = (props) => {
  const { url } = props; 
  const classes = useStyles();
  return (
    <Box className = {classes.border} component="img" src={url} alt="image sent as message"></Box>
  );
};

export default ImageEl;