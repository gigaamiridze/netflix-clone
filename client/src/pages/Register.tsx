import { RegisterContainer, TopContainer, Logo } from '../components';
import { NetflixLogo } from '../assets';

function Register() {
  return (
    <RegisterContainer>
      <TopContainer>
        <Logo 
          src={NetflixLogo} 
          isHomeContent={false}
          alt='netflix' 
        />
      </TopContainer>
    </RegisterContainer>
  )
}

export default Register;