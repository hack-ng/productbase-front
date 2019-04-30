import React from "react";
// node.js library that concatenates classes (strings)

import {
  Button,
  Card,
  CardHeader,
  Container,
  Row,
  Col
} from "reactstrap";



import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchEntries } from "../store/actions/entries";

import Header from "../components/Headers/Header.jsx";
import EntriesTable from "../components/EntriesTable";

class Index extends React.Component {
  state = {
    activeNav: 1
  };
  async componentDidMount() {
    
      await this.props.fetchEntries();
    
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container className="mt--7" fluid>
          <Row className="mb-5 pt-4">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Recent Entries</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Link to="/admin/entries">
                        <Button color="info" size="sm">
                          View all &rarr;
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </CardHeader>
                <EntriesTable entries={this.props.entries ? this.props.entries.slice(0,5) : []} onClick={() => {}} />
              </Card>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    entries: state.entries.entries
  };
};

const mapDispatchToProps = {
  fetchEntries
};

const IndexWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default IndexWithRedux;
