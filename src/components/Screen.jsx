import { useRef } from "react"
import styled, { keyframes } from 'styled-components'

const expandContractAnim = keyframes`
    from {}
    to {
        scale: 0.8;
    } 
`

const ScreenContainer = styled.div`
    width: 1920px;
    height: 1080px;
    position: relative;
    display: block;
    background-color: var(--submenuSubtitle);
`

const Btns = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 6;
`

const ScreenRight = styled.div`
    width: 1920px;
    height: 1080px;
    border: 85px solid var(--border);
    border-left: 299px solid var(--border);
    background-position: cover;
    background-repeat: no-repeat;
    position: absolute;
    background-image: ${({ img }) => img ? `url(${img})` : ""};
    background-color: var(--border);
    top: 0px;
    left: 0px;
    z-index: 4;
    background-size: 100% 100%;
`

const Top = styled.div`
    // width: 100%;
    width: 25%;
    position: absolute;
    top: 113px;
    left: 116px;
    z-index: 33;
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const TopText = styled.div`
    color: var(--menuText);
    font-size: 24px;
    line-spacing: 30px;
    text-decoration: none;
    text-transform: uppercase;
`

const TopArrow = styled.div`
    width: 42px;
    height: 77px;
    background-image: url(arrows/semi-arrow-up.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
`

const Bottom = styled.div`
    // width: 100%;
    width: 25%;
    position: absolute;
    bottom: 113px;
    left: 116px; 
    z-index: 33;
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const BottomText = styled.div`
    color: var(--menuText);
    font-size: 24px;
    line-spacing: 30px;
    text-decoration: none;
    text-transform: uppercase;
`

const BottomArrow = styled.div`
    width: 42px;
    height: 77px;
    background-image: url(arrows/semi-arrow-down.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
`

const InfoContainer = styled.div`
    height: 100%;
    position: absolute;
    top: 0px;
    left: 1123px;
    z-index: 33;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
`

const Info = styled.div`
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const InfoText = styled.div`
    color: var(--menuText);
    font-size: 41px;
    line-height: 42px;
    text-decoration: none;
    white-space: pre-line;
`

const InfoArrow = styled.div`
    width: 90px;
    height: 70px;
    background-image: url(arrows/arrow-right.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    animation-name: ${expandContractAnim};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
`

const MenuTitleContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const MenuTitle = styled.div`
    position: absolute;
    width: 48%;
    font-weight: 600;
    margin-left: 116px;
    color: var(--menuText);
    font-size: 117px;
    line-height: 112px;
    z-index: 33;
    text-transform: uppercase;
    white-space: pre-line;
`

const Screen = ({
    id,
    // navigation,
    // menu,
    // submenus,
    // children,
    // imgSrc,
    // slideTop,
    // slideDown,
    // slideScreenToInfo,
    // setActiveSubmenu
}) => {
    const sliderRef = useRef()
    return (<>
        <ScreenContainer
            id={`screen${id}`}
            ref={sliderRef}
        >
            <Btns className="btns">
                <MenuTitleContainer>
                    <MenuTitle onPointerUp={() => slideScreenToInfo(id)}>{menu.title}</MenuTitle>
                </MenuTitleContainer>

                <Top onPointerDown={() => {
                    slideTop()
                }}>
                    <TopText>{menu.top}</TopText>
                    <TopArrow />
                </Top>
                <Bottom onPointerDown={() => {
                    slideDown()
                }}>
                    <BottomArrow />
                    <BottomText>{menu.down}</BottomText>
                </Bottom>

                {/* <InfoContainer>
                    {submenus.map((submenu, index) => {
                        return (<Info key={index} onPointerDown={() => {
                            slideScreenToInfo(id)
                            setActiveSubmenu(index)
                        }}>
                            <InfoArrow />
                            <InfoText>{submenu}</InfoText>
                        </Info>)
                    })}
                </InfoContainer> */}
            </Btns>
            <ScreenRight img={imgSrc} />
        </ScreenContainer>
        {navigation.activeScreen === id && <>{children}</>}
    </>)
}

export default Screen
