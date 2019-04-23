import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  UncontrolledTooltip,
  PaginationItem,
  Modal,
  PaginationLink,
  Table,
  CardFooter,
  Pagination,
  DropdownMenu,
  DropdownToggle,
  Progress,
  UncontrolledDropdown,

  Col
} from "reactstrap";

class Home extends React.Component {
  state = {
    defaultModal: false,
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  renderModal = () => {
    return (
      <Modal
        size="lg"
        isOpen={this.state.defaultModal}
        toggle={() => this.toggleModal("defaultModal")}
      >
        <div className="modal-header">
          <h3 className="modal-title" id="modal-title-default">
            Yoruba Book
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal("defaultModal")}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Row>
            <Col className="text-center mb-3" lg={3}>
              <img
                src="https://images.menswearhouse.com/is/image/TMW/MW40_57V0_23_JOSEPH_ABBOUD_VOYAGER_LT_BLUE_OVAL_SET?$40MainPDP$&fmt=webp"
                style={{ width: 150, height: 150 }}
              />
            </Col>

            <Col lg={9}>
              <Row className="mb-3">
                <Col xs="7">
                  <h4 className="">Product Name</h4>
                  <span>Yoruba Book</span>
                </Col>
                <Col xs="5">
                  <h4 className="">Code</h4>
                  <span>1012</span>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs="4" md={3}>
                  <h4 className="">Size</h4>
                  <span>Small</span>
                </Col>
                <Col xs="4" md={3}>
                  <h4 className="">Weight</h4>
                  <span>1.3g</span>
                </Col>
                <Col xs="4" md={3}>
                  <h4 className="">Shape</h4>
                  <span>N/A</span>
                </Col>
                <Col xs="4" md={3}>
                  <h4 className="">Color</h4>
                  <span>Grey</span>
                </Col>
              </Row>

              <div className="">
                <h4 className="">Description</h4>
                <p>
                  lNisi do ad et fugiat cupidatat esse exercitation nostrud
                  ipsum. Occaecat sunt quis adipisicing cillum velit
                  exercitation cillum dolor. Ex commodo nisi anim sit dolore
                  elit fugiat ipsum.
                </p>
              </div>
              <hr />

              <Row className="mb-3">
                <Col>
                  <h4>Manufacturer's Name</h4>
                  <p> Illinois </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={6}>
                  <h4>Country</h4>
                  <p> Illinois </p>
                </Col>
                <Col md={6}>
                  <h4>Email Address</h4>
                  <p> company@gmail.com </p>
                </Col>
                <Col md={6}>
                  <h4>Mobile Number</h4>
                  <p> +2347036732678 </p>
                </Col>
                <Col md={6}>
                  <h4>Website</h4>
                  <p> www.company.com </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <h4>Reg Code</h4>
                  <p> 12232DFD </p>
                </Col>
                <Col md={6}>
                  <h4>Reg Year</h4>
                  <p> 04/15/2019 </p>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h4>Address</h4>
                  <p>15 Uptown Funk, Lasgidi</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="modal-footer">
          <Button color="primary" type="button">
            Edit
          </Button>
          <Button
            className="ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal("defaultModal")}
          >
            Close
          </Button>
        </div>
      </Modal>
    );
  };

  render() {
    return (
      <>
        <Col lg="6" md="8" sm="10" className="mb-4 mx-auto">
          <Form className="mx-3">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <Input
                  placeholder="Search Product Name or Manufacturer"
                  type="text"
                />
                <InputGroupAddon addonType="prepend">
                  <Button color="success" onClick={e => e.preventDefault()}>
                    <i className="fas fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>

        <Col lg="10">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Products</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Product image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Categories</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        style={{ width: 80, height: 80 }}
                        alt="..."
                        src="https://images.menswearhouse.com/is/image/TMW/MW40_57V0_23_JOSEPH_ABBOUD_VOYAGER_LT_BLUE_OVAL_SET?$40MainPDP$&fmt=webp"
                      />
                    </td>
                    <td>Yoruba Book</td>
                    <td>0012</td>
                    <td>Eastern Illinois University</td>
                    <td>Wears and Accesories</td>
                    <td className="text-right">
                      <Button onClick={() => {this.toggleModal("defaultModal")}} color="primary"> View </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Col>
        {this.renderModal()}
      </>
    );
  }
}

export default Home;
