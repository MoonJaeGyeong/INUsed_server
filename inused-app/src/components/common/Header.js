import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Icon } from '@iconify/react';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.blue[0]};
`;
const Wrapper = styled.div`
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between;
.icon {
    color: ${palette.gray[0]};
    width: 60px;
    height: 60px;
    cursor: pointer;
    padding: 0.25rem 1rem;
    margin-right: 0.5rem;
    outline: none;
    cursor: pointer;
   
    &:hover {
      background: ${palette.blue[0]};
    }
    border-radius: 30px;
    `;

const SearchBar = styled.input`
  border: none;
  border-radius: 20px;
  padding-bottom: 0.5rem;
  outline: none;
  height: 30px;
  margin: 1rem 1rem;
  font-size: 0.9rem;
  width: 50%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Jua';
  background: url('https://api.iconify.design/ion/search.svg?color=%23aaa')
    no-repeat;
  background-size: 20px 20px;
  background-position: 13px center;
  background-color: white;
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <SearchBar autoComplete="search" name="search" />
          <Icon className="icon" icon="streamline:notification-alarm-2" />
        </Wrapper>
      </HeaderBlock>

      <Spacer />
    </>
  );
};

export default Header;
