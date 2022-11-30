import React from "react";
import { DivTypography } from './style';

import { IPrposTypography } from '../../types/index';

function Typography({children, variant = 'h1', color = 'black', ...rest} : IPrposTypography) {
  const typography  = React.createElement(`${variant}`, {...rest}, `${children}`);
 
  return(
    <DivTypography color={color}>
      {typography}
    </DivTypography>
  )
}

export default Typography;