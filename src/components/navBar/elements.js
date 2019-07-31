import styled from 'styled-components';
import { fontColor, navBarBackgroundColor, navBarHeight, shadow } from '../../styles/style-constants';


export const NavBar = styled.nav`
  z-index: 5;
  height: ${navBarHeight};
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  background-color: ${navBarBackgroundColor};
  box-shadow: ${shadow};
`;

export const Brand = styled.a`
  cursor: pointer;
  float: left;
  padding: 15px;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 5px;
  color: ${fontColor};
  text-decoration: none;
  text-transform: uppercase;
`;

export const ButtonSection = styled.section`
  display: flex;
`;

export const NavButton = styled.a`
   height: ${navBarHeight};
   width: ${navBarHeight};
   display: flex;
   justify-content: center;
   align-items: center;
   svg {
    height: 18px;
    width: 18px;
   }
`;
