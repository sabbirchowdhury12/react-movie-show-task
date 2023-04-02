import React from 'react';
import styled from 'styled-components';


const PreLoader = () => {
    return (
        <PreloaderContainer>
            <img src="https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif" alt="Loading..." />
        </PreloaderContainer>
    );
};

export default PreLoader;


const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ##131722;
  z-index: 9999;
`;