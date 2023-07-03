import React from 'react';

function resolveError(error) {
  if (error == null) {
    return 'Unresolved error';
  }

  if (typeof error === 'object') {
    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }
  }

  return String(error);
}

export default function ErrorBoundary({ error, children }) {
  if (error) {
    error = resolveError(error);

    return (
      <div className="errorBoundary">
        <p>{error}</p>
      </div>
    );
  }

  return children;
}
