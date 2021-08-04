import React, { useState, useEffect } from "react";
import { Item, Label, Header, Icon } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import JobAdvertisementServices from "../services/jobAdvertisement";

export default function JobAdv() {
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    let jobAdvService = new JobAdvertisementServices();

    jobAdvService
      .getAllAdvertisements()
      .then((result) => setjobs(result.data.data));
  }, []);

  return (
    <div>
      <Container style={{ marginTop: "1cm" }}>
        <Item.Group divided>
          {jobs.map((job) => (
            <Item style={{ marginTop: "1cm" }}>
              <Item.Image
                style={{ marginLeft: "11cm" }}
                src="https://www.thoughtco.com/thmb/r36ve3S3mJuL0fvdNbVcXRJ0SjA=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-java-5b4bda1cc9e77c0037171617.jpg"
              />
              <Item.Content>
                <Item.Header>
                  <Header as="h3" >
                    <Header.Content>{job.jobPositions.title}</Header.Content>
                  </Header>
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">{job.employers.companyName}</span>
                </Item.Meta>
                <Item.Description></Item.Description>
                <Item.Extra>
                  <Label>{job.cities.city}</Label>
                  <Label content={job.workingType} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Container>
    </div>
  );
}
