import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 첫 화면이자 로그인 폼을 보여 줍니다.
 */

const LoginFormBlock = styled.div`
  .p {
    font-size: 3px;
    color: ${palette.gray[1]};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링 된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-botton: 1px solid ${palette.gray[0]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-buttom: 1px solid ${palette.gray[0]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 홈 하단에 비밀번호 찾기 링크를 보여줌
 */
const Footer1 = styled.div`
  margin-top: 1rem;
  text-align: left;
  a {
    color: ${palette.gray[1]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[0]};
    }
  }
`;
/**
 * 홈 하단에 회원가입 링크를 보여줌
 */
const Footer2 = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.gray[1]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[0]};
    }
  }
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <p>잠깐, 인천대학교 학생이신가요?</p>
      <form>
        <StyledInput name="email" placeholder="학교 이메일" />
        <StyledInput name="password" placeholder="비밀번호" type="password" />
        <Button>로그인</Button>
      </form>
      <Footer1>
        <Link to="/FindPassword">비밀번호 찾기</Link>
      </Footer1>
      <Footer2>
        <Link to="/register">회원가입</Link>
      </Footer2>
    </LoginFormBlock>
  );
};

export default LoginForm;
