import React, { useState, useEffect } from 'react';

const TermsTextViewer = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    // Fetch the text file from the public directory
    fetch('/terms.txt')  // Ensure the correct path here (relative to the public folder)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error('Error loading the text file:', error));
  }, []);

  return (
    <div>
      <h2>Terms and Conditions</h2>
      <pre
        style={{
          maxWidth: '800px',  // Limit width
          wordWrap: 'break-word',  // Ensure text breaks and wraps
          whiteSpace: 'pre-wrap',  // Preserve spaces and line breaks but allow wrapping
          overflowWrap: 'break-word',  // Ensure long words break when necessary
        }}
      >
        {text}
      </pre>
    </div>
  );
};

export default TermsTextViewer;
