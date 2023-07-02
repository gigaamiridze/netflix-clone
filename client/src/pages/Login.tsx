import { Logo } from '../layouts';
import { AuthContainer, LoginCenterContainer, TopContainer } from '../components';

function Login() {
  return (
    <AuthContainer>
      <TopContainer isRegisterContent={false}>
        <Logo isNavbarContent={false} />
      </TopContainer>
      <LoginCenterContainer>
        <form>
          <h2>Sign In</h2>
        </form>
      </LoginCenterContainer>
    </AuthContainer>
  )
}

export default Login;