import React from "react";

import { Content } from './style';

interface IPrposConteiner {
  children: React.ReactNode,
  degrade?: boolean,
  mxWidth?: string,
}


function Conteiner({children, mxWidth, degrade = false  } : IPrposConteiner) {
  

  return( 
    <Content 
    background={degrade ? 'linear-gradient(180deg, #33383d 0%, #1c1d20 100%)' : ''}
    mxWidth={mxWidth ? mxWidth + 'vw' : '100vw'}
    >
      {children}
    </Content>
  )
}

export default Conteiner;