import styled from 'styled-components';
import { activeColor, fontColor, panelBackgroundColor } from '../../styles/style-constants';

export const PanelWrapper = styled.div`
  background-color: ${panelBackgroundColor};
  position: absolute;
  top: 50px;
  left: 0;
  width: 300px;
`;

export const PanelTitle = styled.div`
  background-color: ${panelBackgroundColor};
  height: 42px;
  color: ${fontColor};
  padding: 5px;
  font-size: 0.75em;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  align-items: center;  
`;

export const ListItem = styled.div`
  margin: 0;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  padding: 5px;
  color: ${fontColor};
  background-color: ${props => props.active ? activeColor: panelBackgroundColor};
`;

export const ListTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${fontColor};
  text-transform: capitalize;
  margin: 0 0 0 5px;
  flex: 1;
`;

export const IconWrapper = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  :hover{
    svg{
        cursor: pointer;
        fill: white;
    }
  }
`;

export const ErrorString = styled.p`
  font-size: 0.714em;
  color: red;
`;

export const DescriptionPanelWrapper = styled.div`
  background-color: ${panelBackgroundColor};
  color: ${fontColor};
  height: calc(100% - 50px);
  position: absolute;
  right: 0;
  width: 150px;
  top: 50px;
  padding: 15px;
`;