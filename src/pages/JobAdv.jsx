import React, { useState, useEffect } from "react";
import { Item, Label } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import JobAdvertisementServices from "../services/jobAdvertisement";

export default function JobAdv() {
  const [jobs, setjobs] = useState([]);

  useEffect(() =>{
      let jobAdvService = new JobAdvertisementServices()

      jobAdvService.getAllAdvertisements().then(result=>setjobs(result.data.data))
  },[])

  return (
    <div>
      <Container>
        <Item.Group divided>
          { jobs.map(job => (
            <Item>
              <Item.Image
                style={{ marginLeft: "11cm" }}
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
              <Item.Content>
                <Item.Header>{job.jobPositions.title}</Item.Header>
                <Item.Meta>
                  <span className="cinema">{job.cities.city}</span>
                </Item.Meta>
                <Item.Description></Item.Description>
                <Item.Extra>
                  <Label>IMAX</Label>
                  <Label icon="globe" content="Additional Languages" />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))
          }
        </Item.Group>
      </Container>
    </div>
  );
}
