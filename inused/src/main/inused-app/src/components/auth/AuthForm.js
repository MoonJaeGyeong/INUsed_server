import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 첫 화면이자 로그인 폼을 보여 줍니다.
 */

const AuthFormBlock = styled.div`
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
      width: 60%;
      display: inline-block;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
    `}
`;

/**
 * 홈 하단에 비밀번호 찾기 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 1rem;
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
      padding-left: 159px;
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

const ErrorMessage = styled.div`
  color: ${palette.blue[3]};
  text-align: center;
  font-size: 0.8rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onClick, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit}>
        {type === 'register' && (
          <StyledInput
            small="true"
            autoComplete="nickname"
            name="nickname"
            placeholder="닉네임"
            onChange={onChange}
            value={form.nickname}
          />
        )}
        {type === 'register' && <Button small="true">중복확인</Button>}

        {type === 'login' ? (
          <StyledInput
            autoComplete="userid"
            name="userid"
            placeholder="학교 이메일"
            onChange={onChange}
            value={form.userid}
          />
        ) : (
          <StyledInput
            small="true"
            autoComplete="userid"
            name="userid"
            placeholder="학교 이메일"
            onChange={onChange}
            value={form.userid}
          />
        )}

        {type === 'register' && (
          <Button small="true" onClick={onClick}>
            인증하기
          </Button>
        )}
        <StyledInput
          autoComplete="userpw"
          name="userpw"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.userpw}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="userpwConfirm"
            name="userpwConfirm"
            placeholder="비밀번호  확인"
            type="password"
            onChange={onChange}
            value={form.userpwConfirm}
          />
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <ButtonWithMarginTop blue="true" fullwidth="true">
          {text}
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
    </AuthFormBlock>
  );
};

export default AuthForm;
