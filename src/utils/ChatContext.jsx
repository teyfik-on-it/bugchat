import React, { createContext } from 'react';

export const ChatContext = createContext({
  chats: null,
  setChats: () => null,
  activeChat: null,
  setActiveChat: () => null,
});

export default function ChatApp({
  chats,
  setChats,
  activeChat,
  setActiveChat,
  children,
}) {
  return (
    <ChatContext.Provider
      value={{ chats, setChats, activeChat, setActiveChat }}
    >
      {children}
    </ChatContext.Provider>
  );
}
