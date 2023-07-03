import React, { useEffect, useState } from 'react';
import './App.css';
import fetchChats from './api/fetchChats';
import ChatList from './components/ChatList';
import CommunicationZone from './components/CommunicationZone';
import CommunicationZonePlaceholder from './components/CommunicationZonePlaceholder';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingBoundary from './components/LoadingBoundary';
import ChatApp from './utils/ChatContext';

function App() {
  const [chats, setChats] = useState();
  const [error, setError] = useState();
  const [activeChat, setActiveChat] = useState();

  useEffect(() => {
    fetchChats(1000)
      .then((items) => setChats(items))
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="App">
      <div className="mainContainer">
        <ErrorBoundary error={error}>
          <LoadingBoundary
            loading={chats === undefined}
            message="Loading chats..."
          >
            <ChatApp
              chats={chats}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
            >
              <div className="wrapper">
                <ChatList />
                {activeChat ? (
                  <CommunicationZone />
                ) : (
                  <CommunicationZonePlaceholder />
                )}
              </div>
            </ChatApp>
          </LoadingBoundary>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
