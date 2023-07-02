import { useState, useRef } from 'react';
import { Logo } from '../layouts';
import {
  AuthContainer, TopContainer, CenterContainer,
  SignInButton, RegisterInput, RegisterButton
} from '../components';

function Register() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    setEmail(emailRef.current?.value);
  }

  const handleFinish = () => {
    setPassword(passwordRef.current?.value);
  }

  return (
    <AuthContainer>
      <TopContainer isRegisterContent={true}>
        <Logo isNavbarContent={false} />
        <SignInButton>Sign In</SignInButton>
      </TopContainer>
      <CenterContainer>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {!email ? (
          <div>
            <RegisterInput
              type='email'
              name='email'
              id='email'
              placeholder='Email address'
              ref={emailRef}
            />
            <RegisterButton onClick={handleStart}>
              Get Started
            </RegisterButton>
          </div>
        ) : (
          <form>
            <RegisterInput
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              ref={passwordRef}
            />
            <RegisterButton onClick={handleFinish}>
              Start
            </RegisterButton>
          </form>
        )}
      </CenterContainer>
    </AuthContainer>
  )
}

export default Register;