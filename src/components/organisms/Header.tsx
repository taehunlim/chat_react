import React, { useState } from 'react';
import styled from "@emotion/styled";

import Icon from "../atoms/Icon";

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    console.log(typeof require('../../assets/images/bell.png'))
    return (
        <StyledHeader>
            <BrandBox>
                Logo
            </BrandBox>
            <Navigation>
                <Icon icon="search" />
                <Icon icon="bell"/>
            </Navigation>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  //box-shadow: 0 2px 5px rgba(black, 0.2);
  //padding: 20px 30px;
  background-color: cornflowerblue;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 70px;
  padding: 0 calc(24px / 2) 0;
`;

const BrandBox = styled.div`
  text-align: center;
`;

const Navigation = styled.div`
  display: flex;
`;
export default Header;
