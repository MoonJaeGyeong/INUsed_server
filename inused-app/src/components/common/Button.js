import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  color: white;
  outline: none;
  cursor: pointer;
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
