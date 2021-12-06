import React from "react";
import styled from "styled-components";
import logo from '../images/logo.png'

const Gnb = () => {
    return (
        <Wrapper>
            <Inner>
                <LogoInner>
                    <Logo src={logo} alt="스타벅스" />
                </LogoInner>
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



export default Gnb;