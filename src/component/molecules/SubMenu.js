import React from "react";
import styled from "styled-components";

const SubMenu = () => {
    const menulist = [
        {
            primary : '커피',
            menu : ['스타벅스 원두', '스타벅스 비아', '스타벅스앳홈 by캡슐']
        },
        {
            primary : '나와 어울리는 커피',
            menu : []
        },
        {
            primary : '스타벅스 리저브™',
            menu : ['RESERVE MAGAZINE']
        },
        {
            primary : '에스프레소 음료',
            menu : ['도피오','에스프레소 마키아또','아메리카노','마끼아또','카푸치노','라떼','모카']
        },
        {
            primary : '최상의 커피를 즐기는 법',
            menu : ['커피 프레스','푸어 오버','아이스 푸어 오버','커피 메이커','카푸치리저브를 매장에서 다양하게 즐기는 법']
        },
        {
            primary : '커피 이야기',
            menu : ['농장에서 우리의 손으로','최상의 아라비카 원두','스타벅스 로스트 스펙트럼','스타벅스 디카페인','클로버® 커피 추출 시스템']
        }
    ]

    return (
        <Wrapper>
            {menulist.map((list, index) => {
                return <ItemBox>
                    <ItemTitle key={index}>{list.primary}</ItemTitle>
                    {list.menu.map((item, itemindex) => {
                        return <Itemname key={itemindex}>{item}</Itemname>
                    })}
                </ItemBox>
            })}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width : 1100px;
    display : flex;
    flex-wrap: wrap;
`

const ItemBox = styled.div`
`

const ItemTitle = styled.div`
    padding : 3px 0px 12px;
    color: #fff;
    font-size: 14px;
    width : 220px;
`

const Itemname = styled.div`
    padding: 3px 0;
    font-size: 12px;
    color: #999;
    width : 220px;
`

export default SubMenu;