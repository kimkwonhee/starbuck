import React, {useState} from "react"
import styled from "styled-components"

const MainMenu = ({MenuOver}) => {

    const menulist = [ 'COFFEE', 'MENU', 'STORE', 'RESPONSIBILITY', 'STARBUCKS REWARDS', "WHAT`S NEW"]

    const [menuStatus, setMenuStatus] = useState();

    return (
        <>
            {menulist.map((list, index) => {
                return  <Menu key={index} 
                              onMouseOver={() => { MenuOver(index, 'true'); setMenuStatus(index);}}
                              onMouseOut={() => MenuOver(index, 'false')}>
                                 {list}
                        </Menu>
            })}
        </>
    )
}

const Menu = styled.div`
    padding : 10px 20px 0px;
    line-height: 20px;
    background : transparent;
    font-size : 14px;
    cursor: pointer;

    &:hover {
        background: #2C2A29;
        color: #669900;
        text-decoration : underline;
    }

`

export default MainMenu