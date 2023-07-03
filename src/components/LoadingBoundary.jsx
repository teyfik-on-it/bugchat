import React from 'react';

export default function LoadingBoundary({ loading, message, children }) {
  if (message == null) {
    message = 'Loading...';
  }

  if (loading) {
    return (
      <div className="loadingBoundary">
        <p>{message}</p>
      </div>
    );
  }

  return children;
}
