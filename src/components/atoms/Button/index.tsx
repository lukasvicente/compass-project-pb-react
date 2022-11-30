import React from "react";
import { ButtonComponent } from './style';

import { IPrposButton } from '../../types/index';

function Button({children, ...rest} : IPrposButton) {
  
  return(
    <ButtonComponent {...rest}> 
      {children} 
    </ButtonComponent>
  )
}

export default Button;