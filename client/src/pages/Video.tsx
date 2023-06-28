import { IoIosArrowBack } from 'react-icons/io';
import { VideoContainer, Back } from '../components';

function Video() {
  return (
    <VideoContainer>
      <Back>
        <IoIosArrowBack />
        <span>Home</span>
      </Back>
      <video 
        src='https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761'
        autoPlay 
        controls
        loop
      />
    </VideoContainer>
  )
}

export default Video;