import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
    dangerColor,
    buttonStandardColor,
    disabledButtonColor,
    disabledFontColor,
    fontColor
} from '../../styles/style-constants';

const Button = styled.button`
  font-size: 0.857em;
  cursor: pointer;
  padding: 3px;
  height: 24px;
  width: 49%;
  border-radius: 0;
  border: black;
  background-color: ${props => props.type === 'danger' ? dangerColor : buttonStandardColor};
  color: ${fontColor};
  ${props => props.disabled && css`
    background-color: ${disabledButtonColor};
    color: ${disabledFontColor};
    cursor: default;
  `}
`;

Button.propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['danger', 'standard']),
};

Button.defaultProps = {
    borderRadius: 0,
    disabled: false,
    type: 'standard',
};

export default Button;