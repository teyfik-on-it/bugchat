import { useContext } from 'react';
import { ChatContext } from '../utils/ChatContext';

/**
 * @typedef {object} Chat
 * @prop {number} id
 * @prop {string} title
 * @prop {string[]} history
 */

/**
 * @typedef {object} IChatContext
 * @prop {Chat[]} chats
 * @prop {(chat: Chat[]) => void} setChats
 * @prop {Chat} activeChat
 * @prop {(chat: Chat) => void} setActiveChat
 */

/**
 *
 * @returns {IChatContext}
 */
export default function useChatContext() {
  return useContext(ChatContext);
}
