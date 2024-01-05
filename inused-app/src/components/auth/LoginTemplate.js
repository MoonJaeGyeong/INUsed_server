import styled from 'styled-components';

/**
 * 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

const LoginTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(135deg, #e7f0fd 0%, #accbee 100%);

  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  fustify-content: center;
  align-items: center;
`;

const LoginTemplate = ({ children }) => {
  return (
    <LoginTemplateBlock>
      <image src="Logo.png" alt="logo" />

      {children}
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;
