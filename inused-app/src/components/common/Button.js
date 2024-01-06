import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${palette.gray[0]};
  &:hover {
    background: ${palette.pink[0]};
  }

  border-radius: 20px;
  font-family: 'Jua';

  ${(props) =>
    props.fullwidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.pink &&
    css`
      background: linear-gradient(180deg, #dad4ec 0%, #f3e7e9 100%);
      &hover: {
        background: ${palette.pink[0]};
      }
    `};
  ${(props) =>
    props.small &&
    css`
      height: 30px;
      font-size: 0.9rem;
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
