import React, { useState } from 'react';
import styled from "@emotion/styled";

import Input from "../../atoms/Input";
import Icon from "../../atoms/Icon";

const SearchBar = ({...props}) => {

    const showClearButton = ({ target }) => {
        const clearButton = target.nextElementSibling;
        clearButton.style.display = "inline-block";
    };

    const hideClearButton = ({ target }) => {
        const inputValue = target.value;
        const clearButton = target.nextElementSibling;
        switch (inputValue) {
            case "":
                return clearButton.style.display = "none";
                break;
            default:
                break;
        }
    };

    const clearInput = ({ target }) => {
        target.parentNode.querySelector('input').value = "";
        target.style.display = "none";
    };

    return (
        <Wrapper {...props}>
            <Input
                {...props}
                onFocus={showClearButton}
                onBlur={hideClearButton}
            />
            <ClearButton icon="close-input" height={18} onClick={clearInput}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  // ${props => ClearButton} {
  //
  // }
`;

const ClearButton = styled(Icon)`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0.4444444444em;
`;

export default SearchBar;
