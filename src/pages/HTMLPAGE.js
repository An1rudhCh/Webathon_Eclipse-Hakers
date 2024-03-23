import React, { useEffect } from 'react';

const HTMLPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './index.html';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="html-container"></div>;
};

export default HTMLPage;