import React, {useState} from "react";
import styled from "styled-components";
import logo from '../images/logo.png'
import searchimg from '../images/icon_magnifier_black.png'
import MainMenu from "./atoms/MainMenu";
import SubMenu from "./molecules/SubMenu";

const Gnb = () => {
    
    const [menuindex, setMenuIndex] = useState(0);
    const [menustatus, setMenuStatus] = useState(false);

    const MenuOver = (value, status) => {
        if(status === 'true') {
            setMenuIndex(value);
            setMenuStatus(true);
        } else {
            setMenuIndex(value);
        }
    }
   
    return (
        <Wrapper>
            <TopInner>
                <LogoInner>
                    <Logo src={logo} alt="스타벅스" />
                </LogoInner>
                <MenuInner>
                    <UtilNav>
                        <UtilMenu>Sign In</UtilMenu>
                        <UtilMenu>My Starbucks</UtilMenu>
                        <UtilMenu>Customer Service &#38; Ideas</UtilMenu>
                        <UtilMenu>Find a Store</UtilMenu>
                        <SearchBox >
                            <Searchimg src={searchimg} />
                        </SearchBox>
                    </UtilNav>
                    <MainNav>
                        <MainMenu MenuOver={MenuOver}/>
                    </MainNav>
                </MenuInner>
            </TopInner>
            <SubInner>
                <SubMenu status={menustatus} menuindex={menuindex}/>
            </SubInner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 120px;
    position : fixed;
    top : 0;
    background-color : #f6f5ef;
    display : flex;
    justify-content : center;
`

const TopInner = styled.div`
    width : 1100px;
    height : 100%;
    display : flex;
`

const LogoInner = styled.div`
    width : 75px;
    height : 100%;
    display : flex;
    align-items : center;
`

const Logo = styled.img`
    width : 75px;
    height : 75px;
`

const MenuInner = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
`

const UtilNav = styled.div`
    display : flex;
    height : 54px;
    justify-content : flex-end;
    align-items : center;
`
const UtilMenu = styled.div`
    color: #555;
    height : 18px;
    /* line-height: 20px; */
    padding : 0px 20px;
    border-right : 1px solid #aaa;
    cursor: pointer;
    font-size : 14px;

    &:hover {
        text-decoration : underline;
    }
`
const SearchBox = styled.div`
    width : 32px;
    height : 32px;
    background-color : #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition : .5s;
`

const Searchimg = styled.img`
    position : relative;
    top : 6px;
    right : -6px;
`

const MainNav = styled.div`
    width : 100%;
    height : 66px;
    display : flex;
    justify-content : flex-end;
`

const SubInner = styled.div`
    position : absolute;
    top : 120px;
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    background: #2C2A29;
`




export default Gnb;