import React from "react";
import styled from "styled-components";
import subbg from '../../images/gnb_sub_txbg.jpg'

const SubMenu = ({menuindex, status}) => {
    
    const menulist = [
        // 1
        {  
            mainmenu : [
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
                    menu : ['커피 프레스','푸어 오버','아이스 푸어 오버','커피 메이커','리저브를 매장에서 다양하게 즐기는 법']
                },
                {
                    primary : '커피 이야기',
                    menu : ['농장에서 우리의 손으로','최상의 아라비카 원두','스타벅스 로스트 스펙트럼','스타벅스 디카페인','클로버® 커피 추출 시스템']
                }
            ],
            submenu : [
                {
                    subject : '나와 어울리는 커피 찾기',
                    contents : '스타벅스가 여러분에게 어울리는 커피를 찾아 드립니다.'
                },
                {
                    subject : '최상의 커피를 즐기는 법',
                    contents : '여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.'
                }
            ]
        },
        // 2
        {  
            mainmenu : [
                {
                    primary : '음료',
                    menu : ['콜드 브루', '브루드 커피', '에스프레소', '프라푸치노', '블렌디드', '스타벅스 피지오', '티(티바나)', '기타 제조 음료', '스타벅스 주스(병음료)']
                },
                {
                    primary : '푸드',
                    menu : ['브레드', '케이크','샌드위치 & 샐러드', '따뜻한 푸드', '과일 & 요거트', '스낵 & 미니 디저트', '아이스크림']
                },
                {
                    primary : '상품',
                    menu : ['머그', '글라스', '플라스틱 텀블러', '스테인리스 텀블러', '보온병', '액세서리', '커피 용품', '패키지 티(타바나)']
                },
                {
                    primary : '카드',
                    menu : ['실물카드', 'e-Gift 카드']
                },
                {
                    primary : '메뉴 이야기',
                    menu : ['나이트로 콜드브루', '콜드 브루', '스타벅스 티바나']
                }
            ],
            submenu : [
                {
                    subject : '나이트로 콜드 브루',
                    contents : '나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.'
                }
            ]
        },
        // 3
        {  
            mainmenu : [
                {
                    primary : '매장 찾기',
                    menu : ['퀵 검색', '지역 검색']
                },
                {
                    primary : '드라이브 스루 매장',
                    menu : []
                },
                {
                    primary : '스타벅스 리저브™ 매장',
                    menu : []
                },
                {
                    primary : '커뮤니티 스토어 매장',
                    menu : []
                },
                {
                    primary : '매장 이야기',
                    menu : ['티바나 바 매장']
                }
            ],
            submenu : [
                {
                    subject : '매장찾기',
                    contents : '보다 빠르게 매장을 찾아보세요.'
                }
            ]
        },
        // 4
        {  
            mainmenu : [
                {
                    primary : '사회공헌 캠페인 소개',
                    menu : []
                },
                {
                    primary : '지역 사회 참여 활동',
                    menu : ['희망배달 캠페인', '재능기부 카페 소식', '커뮤니티 스토어', '청년 지원 프로그램', '우리 농산물 사랑 캠페인', '우리 문화 지키기']
                },
                {
                    primary : '환경 보호 활동',
                    menu : ['친환경 활동', '일회용 컵 없는 매장', '커피 원두 재활용']
                },
                {
                    primary : '윤리 구매',
                    menu : ['윤리적 원두 구매', '공정무역 인증', '커피 농가 지원 활동']
                },
                {
                    primary : '글로벌 사회 공헌',
                    menu : ['윤리경영 보고서', '스타벅스 재단', '지구촌 봉사의 달']
                }
            ],
            submenu : []
        },
        // 5
        {  
            mainmenu : [
                {
                    primary : '스타벅스 리워드',
                    menu : ['스타벅스 리워드 소개', '등급 및 혜택', '스타벅스 별', '자주 하는 질문']
                },
                {
                    primary : '스타벅스 카드',
                    menu : ['스타벅스 카드 소개', '스타벅스 카드 갤러리', '등록 및 조회', '충전 및 이용안내', '분실신고/환불신청', '자주 하는 질문']
                },
                {
                    primary : '스타벅스 e-Gift Card',
                    menu : ['스타벅스 e-Gift Card 소개', '이용안내', '선물하기', '자주 하는 질문']
                }
            ],
            submenu : [{
                subject : '스타벅스 카드 등록하기',
                contents : '카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.'
            }]
        },
        // 6
        {  
            mainmenu : [
                {
                    primary : '이벤트',
                    menu : ['전체', '스타벅스 카드', '스타벅스 리워드', '온라인', 'e-프리퀀시 증정품']
                },
                {
                    primary : '뉴스',
                    menu : ['전체','상품 출시','스타벅스와 문화', '스타벅스 사회공헌','스타벅스 카드출시']
                },
                {
                    primary : '매장별 이벤트',
                    menu : ['일반 매장', '신규 매장']
                },
                {
                    primary : 'e-프리퀀시',
                    menu : ['이용안내', '이용 현황']
                },
                {
                    primary : '공지사항',
                    menu : []
                },
                {
                    primary : '월페이퍼',
                    menu : []
                }
            ],
            submenu : [{
                subject : '매장별 이벤트',
                contents : '스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.'
            },
            {
                subject : '월페이퍼',
                contents : '매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!'
            }]
        },
    ]

    return (
        <Wrapper status={status}>
            <SubSection1>
                {menulist[menuindex].mainmenu.map((list, index) => {
                    return  <ItemBox>
                                <ItemTitle key={index}>{list.primary}</ItemTitle>
                                {list.menu.map((item, itemindex) => {
                                    return <Itemname key={itemindex}>{item}</Itemname>
                                })}
                            </ItemBox>
                })}
            </SubSection1>
            <SubSection2>
                <Section2Inner>
                    {menulist[menuindex].submenu.map((list, index) => {
                        return <div key={index}>
                                    <Subject>{list.subject}</Subject>
                                    <SubContents>{list.contents}</SubContents>
                                </div>
                    })}
                </Section2Inner>
            </SubSection2>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    transition : .5s;
    
`

const SubSection1 = styled.div`
    padding: 20px 0;
    width : 1100px;
    display : flex;
    flex-wrap: wrap;
`

const ItemBox = styled.div`
    &:nth-child(6) {
        padding-top : 30px;
    }
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

export default SubMenu;