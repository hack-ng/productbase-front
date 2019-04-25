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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

import { fetchAPIKeys, generateAPIKeys } from '../store/actions/apikeys'

import { connect } from 'react-redux'

class ManageKeys extends React.Component {
  
  async componentDidMount(){
    await this.props.fetchAPIKeys()
  }

  renderKeys = () => {
    if (this.props.apikeys){
      return this.props.apikeys.map(apikey => (
        <div key={apikey.id} className="d-flex mb-2">
          <Input
            value={apikey.code}
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
      ));
    }
  }

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
                    {this.renderKeys()}
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

const mapStateToProps = state => {
  return {
    apikeys: state.apikeys.apikeys
  }
}

const mapDispatchToProps = {
  fetchAPIKeys,
  generateAPIKeys
}

const WithRedux = connect(mapStateToProps, mapDispatchToProps)(ManageKeys);

export default WithRedux;
