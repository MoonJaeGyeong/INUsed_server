import LoginForm from '../components/auth/LoginForm';
import LoginTemplate from '../components/auth/LoginTemplate';
const RegisterPage = () => {
  return (
    <LoginTemplate>
      <LoginForm type="register" />
    </LoginTemplate>
  );
};
export default RegisterPage;
