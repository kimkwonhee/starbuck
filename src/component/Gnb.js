import React, {useEffect} from "react";
import styled from "styled-components";
import logo from '../images/logo.png'
import searchimg from '../images/icon_magnifier_black.png'
import subbg from '../images/gnb_sub_txbg.jpg'
import MainMenu from "./atoms/MainMenu";
import SubMenu from "./molecules/SubMenu";

const Gnb = () => {
    
    const MenuOver = (value) => {
        console.log(value);
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
                <SubSection1>
                    <SubMenu />
                </SubSection1>
                <SubSection2>
                    <Section2Inner>
                        <Subject>나와 어울리는 커피 찾기</Subject>
                        <SubContents>스타벅스가 여러분에게 어울리는 커피를 찾아 드립니다.</SubContents>
                        <Subject>최상의 커피를 즐기는 법</Subject>
                        <SubContents>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</SubContents>
                    </Section2Inner>
                </SubSection2>
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

const SubSection1 = styled.div`
    padding: 20px 0;
`

const SubSection2 = styled.div`
    padding: 5px 0 20px;
    background : url(${subbg});
    width : 100%;
    display : flex;
    justify-content : center;
`

const Section2Inner = styled.div`
    width : 1100px;
    padding-top : 25px;
`

const Subject = styled.div`
    font-size: 12px;
    line-height: 18px;
    color: #999;
`
const SubContents = styled.div`
    font-size: 12px;
    color: #64a70b;
    margin-bottom : 10px;
`



export default Gnb;