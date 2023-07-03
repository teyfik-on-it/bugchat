import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import React from 'react';
import useChatContext from '../hooks/useChatContext';
import './ChatList.css';

export default function ChatList() {
  const { chats, setActiveChat } = useChatContext();

  return (
    <div className="chatList">
      <List subheader={<ListSubheader>Chats</ListSubheader>}>
        {chats.map((chat) => (
          <ListItem key={chat.id} button onClick={() => setActiveChat(chat)}>
            <ListItemText primary={chat.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
