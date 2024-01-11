import LoginForm from '../components/auth/LoginForm';
import LoginTemplate from '../components/auth/LoginTemplate';
const LoginPage = () => {
  return (
    <LoginTemplate>
      <LoginForm type="login" />
    </LoginTemplate>
  );
};
export default LoginPage;
