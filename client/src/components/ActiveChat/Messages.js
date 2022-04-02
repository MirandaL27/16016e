import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble, ImageEl } from '.';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imageBox: {
    display: 'flex',
    justifyContent: "flex-end",
  },
}));

const Messages = (props) => {
  const classes = useStyles();
  const { messages, otherUser, userId, } = props;
  return (
    <Box>
      {messages.map((message) => {
          const time = moment(message.createdAt).format('h:mm');

          return message.senderId === userId ? (
            <>
              <Box className={classes.imageBox}>
                {message.attachments && message.attachments.map((url) => (
                  <ImageEl key={url} url={url} />
                ))}
              </Box>
              {message.text && < SenderBubble key={message.id} text={message.text} time={time} />}
            </>
          ) : (
            <>
              <Box>
                {message.attachments && message.attachments.map((url) => (
                  <ImageEl key={url} url={url} />
                ))}
              </Box>
              { message.text && <OtherUserBubble
                key={message.id}
                text={message.text}
                time={time}
                otherUser={otherUser}
              />}
            </>
          )
      })}
    </Box>
  );
};

export default Messages;
