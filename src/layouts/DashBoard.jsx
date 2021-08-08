import React from "react";
import JobAdv from "../pages/JobAdv";
import JobAdvDetail from "../pages/JobAdvDetail";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Navi from "./Navi";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Cities from "./cities";
import SignUp from "../pages/SignUp";

export default function DashBoard() {
  return (
    <div>
      <Navi></Navi>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Cities></Cities>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/jobs" component={JobAdv}></Route>
            <Route path="/jobs/:id" component={JobAdvDetail}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={SignUp}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
