import React, { useState } from 'react';
import styled from "@emotion/styled";

import Input from "../../atoms/Input";
import Icon from "../../atoms/Icon";

const SearchBar = ({...props}) => {

    const showClearButton = (e) => {
        const clearButton = e.target.nextElementSibling;
        clearButton.style.display = "inline-block";
    };

    const hideClearButton = (e) => {
        const clearButton = e.target.nextElementSibling;
        clearButton.style.display = "none";
    };

    const clearInput = (e) => {
        e.target.parentNode.querySelector('input').value = "";
    };

    return (
        <Wrapper>
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
