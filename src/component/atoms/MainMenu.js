import React, {useState} from "react"
import styled from "styled-components"

const MainMenu = ({MenuOver}) => {

    const [menuSection, setMenuSection] = useState();

    const menulist = [ 'COFFEE', 'MENU', 'STORE', 'RESPONSIBILITY', 'STARBUCKS REWARDS', "WHAT`S NEW"]

    return (
        <>
            {menulist.map((list, index) => {
                return <Menu key={index} onMouseOver={() => MenuOver(index) }>{list}</Menu>
            })}
        </>
    )
}

const Menu = styled.div`
    padding : 10px 20px 0px;
    line-height: 20px;
    cursor: pointer;
    font-size : 14px;

    &:hover {
        background: #2C2A29;
        color: #669900;
        text-decoration : underline;
    }

`

export default MainMenu