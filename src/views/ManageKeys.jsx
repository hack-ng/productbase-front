import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class ManageKeys extends React.Component {
  render() {
    return (
      <>
        <Header hideSummary={true} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row className="mb-5">
            <div className="col-md-10 mx-auto">
              <Card className="shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">API Keys</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Generate
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Col className="mx-auto" md={8}>
                    <div className="d-flex mb-2">
                      <Input
                        value={"122334adsad"}
                        type="text"
                        disabled
                        className="mr-2"
                      />
                      <Button
                        color="danger"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="d-flex mb-2">
                      <Input
                        value={"122334adsad"}
                        type="text"
                        disabled
                        className="mr-2"
                      />
                      <Button
                        color="danger"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Delete
                      </Button>
                    </div>
                  </Col>
                </CardBody>
                <CardFooter className="py-4" />
              </Card>
            </div>
          </Row>
          {/* Table */}

          
        </Container>
      </>
    );
  }
}

export default ManageKeys;
