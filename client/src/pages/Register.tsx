import { RegisterContainer, TopContainer, Logo, SignInButton } from '../components';
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
        <SignInButton>Sign In</SignInButton>
      </TopContainer>
    </RegisterContainer>
  )
}

export default Register;