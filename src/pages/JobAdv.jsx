import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Item, Label, Header } from "semantic-ui-react";
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
        <Item.Group relaxed>
          {jobs.map((job) => (
            <Item style={{ marginTop: "1cm" }}>
              <Item.Image
                style={{ marginLeft: "11cm" }}
                src={job.employers.companyPhoto!=null?job.employers.companyPhoto:"https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"}
              />
              <Item.Content>
                <Item.Header>
                  <Header as="h3" >
                    <Header.Content><Link to={"/jobs/"+job.id}>{job.jobPositions.title}</Link></Header.Content>
                  </Header>
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">{job.employers.companyName}</span>
                </Item.Meta>
                <Item.Description></Item.Description>
                <Item.Extra>
                  <Label>{job.cities.city}</Label>
                  {job.workingType!=null?
                  <Label content/>:
                  <Label content={job.workingType}/>
                  }
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Container>
    </div>
  );
}
