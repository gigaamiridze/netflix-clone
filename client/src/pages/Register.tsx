import { NetflixLogo } from '../assets';
import { 
  RegisterContainer, TopContainer, CenterContainer, Logo, 
  SignInButton, RegisterForm, RegisterInput, RegisterButton 
} from '../components';

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
      <CenterContainer>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <RegisterForm>
          <RegisterInput name='email' id='email' placeholder='Email address' />
          <RegisterButton>Get Started</RegisterButton>
        </RegisterForm>
      </CenterContainer>
    </RegisterContainer>
  )
}

export default Register;