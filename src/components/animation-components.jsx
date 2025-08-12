import styled, { keyframes } from 'styled-components'

export const expandContractAnim = keyframes`
  from {}
  to {
      scale: 0.8;
  } 
`

export const fadeOut = keyframes`
    from {}
    to {
        opacity: 0;
    }
`

export const fadeIn = keyframes`
    from {}
    to {
        opacity: 1;
    }
`

export const slideOut = keyframes`
    from {}
    to {
        translate: 1920px 0px;
    }
`

export const slideIn = keyframes`
    from {
        translate: 1920px 0px;
    }

    to {
        translate: 0px 0px;
    }
`
