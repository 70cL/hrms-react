import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Image,
  Segment,
  Label,
  List,
} from "semantic-ui-react";
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
        <Container style={{ marginTop: "1cm" }}>
          <Card style={{ marginLeft: "11cm" }}>
            <Card.Content>
              <Image
                floated="left"
                size="tiny"
                style={{width:"300%"}}
                src={job.employers?.companyPhoto}
              />
              <Card.Header>{job.employers?.companyName}</Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description>
                <Segment attached></Segment>
                <Label>
                  Alınacak kişi: 
                  <Label.Detail>{job.person_need}</Label.Detail>
                </Label>
                <Label>
                  Çalışma tipi: 
                  <Label.Detail>{job.workingLocation?.working_location}</Label.Detail>
                </Label>
                <Label>
                  Şehir:
                  <Label.Detail>{job.cities?.city}</Label.Detail>
                </Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Başvuru yap!
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Container>
      </Card.Group>
    </div>
  );
}
