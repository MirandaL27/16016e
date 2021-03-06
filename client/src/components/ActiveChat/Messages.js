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
          urlList.length > 1 ?
            (
              <Box>
                {message.text && < SenderBubble key={message.id} text={message.text} time={time} imagesExist={message.attachments ? true : false} />}
                <ImageEl urlList={urlList} time={time} />
              </Box>
            ) : (
              <Box>
                <ImageEl urlList={urlList} time={time} />
                {message.text && < SenderBubble key={message.id} text={message.text} time={time} imagesExist={message.attachments ? true : false} />}
              </Box>
            )
        ) : (
          urlList.length > 1 ? 
          (
          <Box>
            {message.text && <OtherUserBubble
              key={message.id}
              text={message.text}
              time={time}
              otherUser={otherUser}
              imagesExist={message.attachments ? true : false}
            />}
            <ImageEl urlList={urlList} time={time} />
          </Box>
          ): (
            <Box>
              <ImageEl urlList={urlList} time={time} />
              {message.text && <OtherUserBubble
                key={message.id}
                text={message.text}
                time={time}
                otherUser={otherUser}
                imagesExist={message.attachments ? true : false}
              />}
            </Box>
            )
        )
      })}
    </Box>
  );
};

export default Messages;
