import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 첫 화면이자 로그인 폼을 보여 줍니다.
 */

const LoginFormBlock = styled.div`
  p {
    font-size: 0.9rem;
    font-family: 'Jura';
    text-align: center;
    color: ${palette.pink[1]};
    padding-top: 3rem;
  }
`;

/**
 * 스타일링 된 input
 */
const StyledInput = styled.input`
  border: none;
  border-radius: 20px;
  outline: none;
  height: 45px;
  font-size: 0.9rem;
  width: 100%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: 10px center;
  padding-left: 0.5rem;
  font-family: 'Jua';
  &:focus {
  }
  & + & {
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.small &&
    css`
      width: 70%;
      display: inline-block;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
    `}
`;

/**
 * 홈 하단에 비밀번호 찾기 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[1]};
    text-decoration: underline;
    font-size: 0.9rem;
    &:hover {
      color: ${palette.gray[0]};
    }
  }

  span {
      padding-left: 300px;
    }
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
const textMap = {
  login: '로그인',
  register: '가입하기',
};

const LoginForm = ({ type }) => {
  const text = textMap[type];
  return (
    <LoginFormBlock>
      <form>
        {type === 'register' && (
          <StyledInput
            small="true"
            autoComplete="username"
            name="username"
            placeholder="닉네임"
          />
        )}
        {type === 'register' && <Button small="true">중복확인</Button>}

        {type === 'login' ? (
          <StyledInput
            autoComplete="useremail"
            name="useremail"
            placeholder="학교 이메일"
          />
        ) : (
          <StyledInput
            small="true"
            autoComplete="useremail"
            name="useremail"
            placeholder="학교 이메일"
          />
        )}

        {type === 'register' && <Button small="true">인증하기</Button>}
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호  확인"
            type="password"
          />
        )}

        <ButtonWithMarginTop pink="true" fullwidth="true">
          <Link to="/main">{text}</Link>
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' && <Link to="/FindPassword">비밀번호 찾기</Link>}
        <span />
        {type === 'login' ? (
          <Link to="/register">회원 가입</Link>
        ) : (
          <Link to="/">뒤로 가기</Link>
        )}
      </Footer>
      <p>Product By C-Komachi</p>
    </LoginFormBlock>
  );
};

export default LoginForm;
