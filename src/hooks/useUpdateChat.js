import useChatContext from './useChatContext';

export default function useUpdateChat() {
  const { chats, setChats, activeChat, setActiveChat } = useChatContext();

  return (chat) => {
    const subject = chats.find(({ id }) => id === chat.id);
    const newSubject = { ...subject, ...chat };

    setChats(chats.map((item) => (item.id === subject.id ? newSubject : item)));
    setActiveChat(chats.find((item) => item.id === activeChat.id));
  };
}
