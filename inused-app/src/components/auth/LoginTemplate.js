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

  .logo-area {
    display: block;
    padding-top: 5.5rem;
    padding-bottom: 0.5rem;
  }
  .responsive-image {
    /* 모바일 세로화면*/
    @media screen and (max-width: 576px) {
      max-width: 270px;
    }
    /* 모바일 가로화면*/
    @media screen and (min-width: 577px && max-width: 768px) {
      max-width: 270px;
    }

    /* 데스크탑 화면*/
    @media screen and (min-width: 769px) {
      width: 100%;
      max-width: 1000px;
    }
  }
`;

const LoginTemplate = ({ children }) => {
  return (
    <LoginTemplateBlock>
      <div className="logo-area">
        <img className="responsive-image" src="Logo.png" alt="logo" />
      </div>
      {children}
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;
