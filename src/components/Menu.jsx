// import { useState, useRef } from 'react'
// import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { expandContractAnim } from './animation-components'

const MenuElement = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--mainColor);
  // background-image: url(/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  border: 85px solid var(--border);
`

const Button = styled.div`
  width: calc(100% / 4);
  border: 2px solid var(--border);
  height: 100%;
  position: relative;
  z-index: 66;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 38px;
  text-decoration: none;
  color: var(--menuText);
`

const Arrow = styled.img`
  align-self: center;
  width: 42px;
  height: 77px;
  animation-name: ${expandContractAnim};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

const Text = styled.p`
  height: 110px;
  font-size: 43px;
  line-height: 47px;
  text-transform: uppercase;
  white-space: pre;
  font-weight: 400;
  text-align: center;
`

const Menu = () => {
  const navigate = useNavigate();
  // const { t } = useTranslation()

  return (
    <>
      <MenuElement id="menu">
        <Button
          onPointerDown={() => navigate('/screen-one')}
        >
          <Arrow src="arrows/arrow-down.svg" />
          <Text>
            {/* {t("menu.screen1")} */}screen1
          </Text>
        </Button>

        <Button
          onPointerDown={() => navigate('/screen-two')}
        >
          <Arrow src="arrows/arrow-down.svg" />
          <Text>
            {/* {t("menu.screen2")} */}screen2
          </Text>
        </Button>

        <Button
          onPointerDown={() => navigate('/screen-three')}
        >
          <Arrow src="arrows/arrow-down.svg" />
          <Text>
            {/* {t("menu.screen3")} */}screen3
          </Text>
        </Button>

        <Button
          onPointerDown={() => navigate('/screen-four')}
        >
          <Arrow src="arrows/arrow-down.svg" />
          <Text>
            {/* {t("menu.screen4")} */}screen4
          </Text>
        </Button>

      </MenuElement>
    </>
  )
}

export default Menu
