import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  messages.sort((a,b) => {
    const time1 = moment(a.createdAt);
    const time2 = moment(b.createdAt);
    if(time1.isBefore(time2)){
      return -1;
    }
    else if(time1.isSame(time2)){
      return 0;
    }
    else{
      return 1;
    }
  }); 

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
