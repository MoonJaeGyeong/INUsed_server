import styled from 'styled-components';
import palette from '../../lib/styles/palette';

/**
 * 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: ${palette.blue[0]};
  overflow: scroll;

  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  fustify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
  align-items: center;
  .logo-area {
    img {
      width: 280px;
    }
    display: block;
    margin-top: 2rem;
    padding-bottom: 0.3rem;
  }
  padding: 2rem;
  width: 350px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <FormBox>
        <div className="logo-area">
          <img src="Logo.png" alt="logo" />
        </div>
        {children}
      </FormBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
