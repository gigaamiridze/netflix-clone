import { Logo } from '../layouts';
import { AuthContainer, TopContainer } from '../components';

function Login() {
  return (
    <AuthContainer>
      <TopContainer isRegisterContent={false}>
        <Logo isNavbarContent={false} />
      </TopContainer>
    </AuthContainer>
  )
}

export default Login;