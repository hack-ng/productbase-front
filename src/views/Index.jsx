import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
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
                      <Button
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        View all &rarr;
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Author</th>
                      <th scope="col">Products count</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Teenoh</td>
                      <td>33</td>
                      <td>Approved</td>
                      <td>22-03-2019</td>
                    </tr>
                    <tr>
                      <td>Teenoh</td>
                      <td>33</td>
                      <td>Pending</td>
                      <td>22-03-2019</td>
                    </tr>
                    <tr>
                      <td>Teenoh</td>
                      <td>33</td>
                      <td>Canceled</td>
                      <td>22-03-2019</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
