import React from "react";
import styled from "styled-components";
import logo from '../images/logo.png'
import searchimg from '../images/icon_magnifier_black.png'

const Gnb = () => {
   
   
    return (
        <Wrapper>
            <Inner>
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
                    

                </MenuInner>
            </Inner>
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

const Inner = styled.div`
    width : 1100px;
    height : 100%;
    display : flex;
    background-color : red;
`

const LogoInner = styled.div`
    width : 75px;
    height : 100%;
    display : flex;
    align-items : center;
    background-color : gray;
`

const Logo = styled.img`
    width : 75px;
    height : 75px;
`

const MenuInner = styled.div`
    width : 100%;
    height : 100%;
    background-color : green;
`

const UtilNav = styled.div`
    display : flex;
    height : 54px;
    float : right;
    display : flex;
    align-items : center;
    background-color : purple;
`
const UtilMenu = styled.div`
    color: #555;
    height : 20px;
    line-height: 20px;
    padding : 0px 20px;
    border-right : 1px solid #aaa;
    background-color : red;
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



export default Gnb;