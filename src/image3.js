import React, { useState } from 'react';

const Apps3 = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const showImage = () => {
    setIsImageVisible(true);
    // Open the image in a new window
    const newWindow = window.open('', '_blank', 'width=600,height=400');
    newWindow.document.write(`
      <html>
        <head>
          <title>Image</title>
          <style>
            body { text-align: center; }
            img { max-width: 100%; height: auto; }
            button { position: absolute; top: 10px; right: 10px; }
          </style>
        </head>
        <body>
          <button onclick="window.close()">Close</button>
          <img src="/past/IMG-20240919-WA0028.jpg" alt="Placeholder" />
        </body>
      </html>
    `);
    newWindow.document.close(); // Necessary to finish loading the document
  };

  const hideImage = () => {
    setIsImageVisible(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={showImage}>Show Image</button>
    </div>
  );
};

const styles = {
  imageContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 9999,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  closeButton: {
    marginTop: '10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Apps3;