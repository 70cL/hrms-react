import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

export default function HomePage() {
  return (
    <div>
      <h1 style={{marginBottom : "500px"}}>hrms</h1>
      <Segment className="footer" inverted vertical style={{ padding: "5em 0em" }} >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a"><a target="_blank" href="https://github.com/70cL">Github</a></List.Item>
                  <List.Item as="a"><a target="_blank" href="https://www.linkedin.com/in/ovuncgirgin/">Linkedin</a></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
