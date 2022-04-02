import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble, ImageEl } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUser, userId, } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');
        const urlList = [];
        if (message.attachments) {
          message.attachments.forEach(url => {
            urlList.push(url);
          });
        }
        return message.senderId === userId ? (
          <Box>
            <ImageEl urlList={urlList} time={time} messageExists={message.text ? true : false} />
            {message.text && < SenderBubble key={message.id} text={message.text} time={time} />}
          </Box>
        ) : (
          <Box>
            <ImageEl urlList={urlList} time={time} messageExists={message.text ? true : false} />
            {message.text && <OtherUserBubble
              key={message.id}
              text={message.text}
              time={time}
              otherUser={otherUser}
            />}
          </Box>
        )
      })}
    </Box>
  );
};

export default Messages;
