import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import JobAdvertisementServices from "../services/jobAdvertisement";

export default function JobAdvDetail() {
  const [job, setjob] = useState({});
  let { id } = useParams({});

  useEffect(() => {
    let jobAdvService = new JobAdvertisementServices();

    jobAdvService.getById(id).then((result) => setjob(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={
                "https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"
              }
            />
            <Card.Header>{job?.employers?.companyName}</Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>
              <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
