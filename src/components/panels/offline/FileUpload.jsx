import React from 'react';
import styled, { css } from 'styled-components';
import { buttonStandardColor, disabledButtonColor, disabledFontColor, fontColor } from '../../../styles/style-constants';

export default function FileUploadContainer({ title = 'Select a file' , multiple = false, onUpload, disabled = false }) {

    function handleUpload() {
        if (onUpload) {
            onUpload(document.getElementById('file').files);
        }
    }

    return (
        <UploadContainer disabled={disabled}>
            <Caption htmlFor={'file'}>{title}</Caption>
            <input
                id="file"
                disabled={disabled}
                multiple={multiple}
                name="file"
                onChange={handleUpload}
                type="file"
                accept=".csv"
            />
        </UploadContainer>
    )

}

const Caption = styled.label`
  line-height: 42px;
  font-size: 1em;;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const UploadContainer = styled.div`
    width: 100%;
    height: 42px;
    overflow: hidden;
    background-color: ${buttonStandardColor};
    color: ${fontColor};
    border-radius: 0;
    text-align: center;
    display: flex;
    input[type="file"] {
        display: none;
    }
    ${props => props.disabled && css`
      background-color: ${disabledButtonColor};
      color: ${disabledFontColor};
      ${Caption}{
        cursor: default;  
      }
    `}
`;