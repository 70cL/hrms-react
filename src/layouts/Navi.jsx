import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container,  Menu } from "semantic-ui-react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    let history = useHistory()

    function handleSignOut(){
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(){
        setIsAuthenticated(true)
    }

  return (
    <div>
      <Menu size="small" inverted>
        <Container>
          <Menu.Item name="home" as={NavLink} to="/"/>
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {isAuthenticated?<SignIn signOut={handleSignOut}></SignIn>:
            <SignOut signIn={handleSignIn}></SignOut>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
