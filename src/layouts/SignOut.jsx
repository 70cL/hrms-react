import React from "react";
import { Button, MenuItem } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default function SignOut(props) {
  return (
    <div>
      <MenuItem>
        <Button onClick={props.signIn} primary>Giriş Yap</Button>
        <Button primary as={NavLink} to="/signup" style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
      </MenuItem>
    </div>
  );
}
