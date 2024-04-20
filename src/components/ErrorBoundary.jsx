import React, {useTransition} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

function addComment(comment) {
    // For demonstration purposes to show Error Boundary
    if (comment == null) {
      throw new Error("Example Error: An error thrown to trigger error boundary");
    }
  }

const CommentSection = () => {
    const [pending, startTransition] = useTransition();

  return (
    <button type='button' onClick={() => {
        startTransition( () => {
            addComment();
        }) 
    }}>
        Add 
    </button>
  )
}

export default CommentSection