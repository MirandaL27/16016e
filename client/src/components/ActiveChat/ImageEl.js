import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  imageWrapper: {
    width: '25%',
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: '100%',
    flexWrap: 'wrap'
  }
}));

const ImageEl = (props) => {
  const { urlList, time } = props;
  const classes = useStyles();
  if (urlList.length > 0) {
    return (
      <Box className={classes.root}>
        <Typography className={`${classes.date}`}>{time}</Typography>
        <Box className = {classes.wrapper}>
          {urlList.map(url => {
            return (
              <Box className={classes.imageWrapper}>
                <Box className={classes.imageBorder} component="img" src={url} alt="image sent as message"></Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
  return null;
};

export default ImageEl;