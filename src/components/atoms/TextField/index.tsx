import React from "react";
import { Content, Input, Label, Icon } from './style';
import { IPrposTextField } from '../../types/index'

function TextField({variant = 'standard', helpText, error = false, icon, iconEnd = 'inside', ...rest} : IPrposTextField) {

  return(
    <Content>  
        <Input 
          {...rest}
          variant={variant}
          error={error} 
        /> 
      <Icon iconEnd={iconEnd}>
        {icon}
      </Icon>
      <Label>{helpText}</Label>
      
    </Content>
  )
}

export default TextField;