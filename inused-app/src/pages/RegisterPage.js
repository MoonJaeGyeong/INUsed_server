import LoginForm from '../components/auth/AuthForm';
import LoginTemplate from '../components/auth/AuthTemplate';
const RegisterPage = () => {
  return (
    <LoginTemplate>
      <LoginForm type="register" />
    </LoginTemplate>
  );
};
export default RegisterPage;
