import React, { HTMLAttributes } from "react";
 
import Conteiner from "../../atoms/Conteiner";
import ImageCompassRight from "../../atoms/ImageLogoCompass";
import FormLoginMain from "../../organisms/FormLoginMain";
import Typography from "../../atoms/Typography";

import { ContentLeft, ContentRight, DivTypography} from './style';

 
function TLoginMain() {
 
  return(
    <>
      <Conteiner 
        degrade 
      > 
        <ContentLeft>
          <DivTypography>
            <Typography style={{marginBottom: '10px'}} color="white"> Welcome, </Typography>
            <Typography style={{marginBottom: '40px'}} color="white" variant="p"> To continue browsing safely, log in to the network. </Typography>
            <Typography color="white" variant="h2"> Login </Typography>
          </DivTypography>

          <FormLoginMain />        
        </ContentLeft>

        <ContentRight>
          <ImageCompassRight />
        </ContentRight>
      </Conteiner>
    </>
  )
  
}

export default TLoginMain;