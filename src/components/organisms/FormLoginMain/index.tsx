import React, { useState} from "react";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import { AiOutlineUser  } from 'react-icons/ai'
import { HiOutlineLockClosed } from "react-icons/hi";
 
//import { required } from '../../../utils/validate';

function FormLoginMain() {

  const [email, setEmail ] = useState('');

  const HandleClickLogin = () => {
    alert('teste')
  }

  return(
    <>

      <TextField 
        variant="arround"
        placeholder="Email"
        helpText="Field Required"
        error 
        icon={<AiOutlineUser color="white" size={30} /> }
        iconEnd={email.length > 0 ? 'outside' : 'inside'}
        value={email}
        onChange={event => setEmail(event.target.value)}
        type="email"
        
      />
      
      <TextField 
        variant="arround"
        placeholder="Password"
        icon={<HiOutlineLockClosed color="white" size={30} /> }
      />

      <Button 
        style={{marginTop:30}}
        onClick={HandleClickLogin}
        variant='secondary'
      >
        Log in
      </Button>

    </>
  )
  
}

export default FormLoginMain;