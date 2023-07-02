import { Logo } from '../layouts';
import { 
  AuthContainer, CenterContainer, TopContainer, 
  FormContent, TopContent, LoginInput 
} from '../components';

function Login() {
  return (
    <AuthContainer>
      <TopContainer isRegisterContent={false}>
        <Logo isNavbarContent={false} />
      </TopContainer>
      <CenterContainer>
        <FormContent>
          <TopContent>
            <h2>Sign In</h2>
            <form>
              <LoginInput 
                type='text' 
                name='userLoginId' 
                id='userLoginId' 
                placeholder='Email or phone number'
              />
              <LoginInput 
                type='password' 
                name='password' 
                id='password' 
                placeholder='Password'
              />
            </form>
          </TopContent>  
        </FormContent>
      </CenterContainer>
    </AuthContainer>
  )
}

export default Login;