import React, { useState } from 'react';
import styled from "@emotion/styled";

import Icon from "../atoms/Icon";
import Badge from "../atoms/Badge";
import SearchBar from "../molecules/SearchBar";

interface Props {
  showSearch: boolean;
};

function Header() {

    const [showSearch, setShowSearch] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    return (
        <StyledHeader>
            <BrandBox>
                Logo
            </BrandBox>
            <Navigation>
                <SearchWrapper
                    showSearch={showSearch}
                >
                    {showSearch &&
                    <StyledSearchBar
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    }
                    <Icon
                        icon="search"
                        onClick={() => {
                            setShowSearch(!showSearch)
                            setSearchKeyword("")
                        }}
                    />
                </SearchWrapper>
                <Badge count={3}>
                    <Icon icon="bell"/>
                </Badge>
            </Navigation>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  box-shadow: 0 2px 5px rgba(black, 0.2);
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

const SearchWrapper = styled.div<Props>`
  ${props => StyledSearchBar} {
    border: ${props => props.showSearch && "none"};
    background: ${props => props.showSearch && "none"};
    box-shadow: ${props => props.showSearch && "none"};
    
    &:focus {
      border: ${props => props.showSearch && "none"};
    }
  };
  display: flex;
  border-bottom: ${props => props.showSearch && "1px solid"};

`;

const StyledSearchBar = styled(SearchBar)`
    height: 22px;
  font-size: 15px;
`;
export default Header;
