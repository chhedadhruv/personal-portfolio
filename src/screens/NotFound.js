import React from 'react';
import Error404 from '../assets/404.webp';

function NotFound() {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={Error404} alt="404 Not Found" />
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },
  image: {
    maxWidth: '90vw',
    maxHeight: '80vh',
    objectFit: 'contain',
  },
};

export default NotFound;
