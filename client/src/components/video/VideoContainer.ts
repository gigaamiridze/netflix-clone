import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    outline: none;
  }
`;

export default VideoContainer;