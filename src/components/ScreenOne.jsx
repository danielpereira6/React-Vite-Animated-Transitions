import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import { fadeIn, fadeOut, slideIn, slideOut } from './animation-components'
import info from '../assets/data.json'

const Container = styled.div`
    width: 1920px;
    height: 1080px;
    background-color: var(--secondColor);
`

const Border = styled.section`
    width: 100%;
    height: 100%;
`

const Content = styled.div`
    width: 100%;
    height: 92.5%;
    display: flex;
    flex-direction: row;
`

const NavBar = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    flex-direction: row;
    font-weight: 500;
`

const History = styled.div`
    width: ${({ widthText }) => widthText || "50%"};
    padding-top: 176px;
    padding-left: 128px;
    padding-right: ${({ paddingRight }) => paddingRight ? paddingRight : "162px"};
    position: relative;
`

const Image = styled.img`
    width: ${({ widthImg }) => widthImg || "50%"};
    height: 1080px;

    animation-name: ${({ anim }) => {
        if (anim === 'out') {
            return slideOut
        } else if (anim === 'in') {
            return slideIn
        } else {
            return null
        }
    }};

    animation-duration: 0.6s;
    animation-timing: easy-in;
    animation-fill-mode: forwards;
`

const K = styled.div`
    position: relative;

    animation-name: ${({ anim }) => {
        if (anim === 'out') {
            return slideOut
        } else if (anim === 'in') {
            return slideIn
        } else {
            return null
        }
    }};

    animation-duration: 0.6s;
    animation-timing: easy-in;
    animation-fill-mode: forwards;
    overflow: visible;
`

const Back = styled.div`
    width: 200px;
    height: 85px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    color: var(--submenuSubtitle);
    text-decoration: none;
    gap: 20px;
    font-size: 20px;
`

const ArrowBack = styled.img`
    width: 26px;
    height: 20px;
`

const SubMenus = styled.div`
    width: 100%;
    display: flex;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-size: 22px;
`

const SubMenu = styled.div`
    color: ${({ active }) => active ? "var(--submenuSubtitle)" : '#4229184D'};
    height: 100%;
    display: flex;
    align-items: center;
`

const Title = styled.div`
    font-size: 25px;
    color: var(--submenuTitle);
    line-spacing: 35px;
    text-transform: uppercase;
`

const Subtitle = styled.div`
    opacity: 0;
    margin-top: 5px;
    color: var(--submenuSubtitle);
    line-spacing: 63px;
    line-height: 60px;
    font-size: 52px;
    white-space: pre-line;

    animation-name: ${({ anim }) => {
        if (anim === 'out') {
            return fadeOut
        } else if (anim === 'in') {
            return fadeIn
        } else {
            return null
        }
    }};
    animation-duration: 0.6s;
    animation-timing: easy-in;
    animation-fill-mode: forwards;
`

const Text = styled.div`
    font-size: 20px;
    height: 77%;
    overflow-y: auto;
    color: var(--submenuText);
    margin-top: 30px;
    white-space: break-spaces;
    line-height: 31px;


    animation-name: ${({ anim }) => {
        if (anim === 'out') {
            return fadeOut
        } else if (anim === 'in') {
            return fadeIn
        } else {
            return null
        }
    }};
    animation-duration: 0.6s;
    animation-timing: easy-in;
    animation-fill-mode: forwards;
`

const Logo = styled.div`
    width: 85px;
    height: 85px;
    position: absolute;
    left: 0;
    top: 0px;
    background-color: var(--langBg);
    color: var(--langText);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 66px;
    font-weight: 300;
    text-transform: uppercase;
`

const MenuContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 98;
    top: 0px;
    left: 0px;
    transform: translate(0, -1080px);
    transition: transform 1s; 
`

const ScreenOne = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(0)
    const [isNavigating, setIsNavigating] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const menuRef = useRef(null)

    useEffect(() => {
        if (!menuRef.current) return

        setTimeout(() => {
            if (!menuRef.current) return
            menuRef.current.style.transform = "translate(0px, 0px)"
        }, 100)
    }, [showMenu])

    const backButton = () => {
        if (isNavigating) return; // Prevent double-click

        setIsNavigating(true);

        setTimeout(() => {
            if (window.history.length > 1) {
                navigate(-1);
            } else {
                navigate("/"); // fallback in case of no page before
            }
        }, 500)
    }

    return (
        <Container id="info">
            {showMenu && <MenuContainer ref={menuRef}>
                <Menu onPointerDown={() => navigate("/menu")} />
            </MenuContainer>}

            <Logo onPointerDown={() => setShowMenu(true)}>=</Logo>

            <Border>
                <Content>
                    <History paddingRight={info.submenus[active]?.paddingRight} widthText={info.submenus[active]?.widthText}>
                        <Title>{info?.title}</Title>
                        <Subtitle>
                            {info.submenus[active]?.title}
                        </Subtitle>
                        <Text>
                            {info.submenus[active]?.text}
                        </Text>
                    </History>

                    <Image
                        widthImg={info.submenus[active]?.widthImg}
                        alt=""
                        src={info.submenus[active]?.image}
                    />
                </Content>

                <Back onPointerDown={backButton} >
                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ArrowBack
                            alt=""
                            src="arrows/arrow-left.svg"
                        />
                    </span>
                    Menu
                </Back>

                <NavBar>
                    <SubMenus>
                        {info?.submenus.map((submenu, index) => {
                            return (
                                <SubMenu
                                    key={index}
                                    subtitle={submenu.title}
                                    position={index}
                                    active={active}
                                />
                            )
                        })}
                    </SubMenus>
                </NavBar>
            </Border>
        </Container >
    )
}

export default ScreenOne