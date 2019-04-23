import React from "react";

import ReactDatetime from "react-datetime";
// reactstrap components
import {
  Badge,
  Card,
  Collapse,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Col,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Modal,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Button,
  CardBody,
} from "reactstrap";
// core components
import Select from "react-select";
import Header from "components/Headers/Header.jsx";

const categories = [
  { value: "chocolate", label: "App and Games" },
  { value: "strawberry", label: "Food" },
  { value: "vanilla", label: "Cosmetics" }
];

class CreateEntry extends React.Component {
  state = {
    defaultModal: false,
    showAddForm: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  toggleAddForm = () => {
    const oldVal = this.state.showAddForm;
    this.setState({showAddForm: !oldVal})
  }

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
                <Col >
                  <h4>Address</h4>
                  <p> 
                   15 Uptown Funk, Lasgidi
                   </p>
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
      <React.Fragment>
        <Header hideSummary={true} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mb-5">
            <Col xl="10">
              <Card className="bg-secondary shadow">
                <CardHeader
                  onClick={this.toggleAddForm}
                  className="bg-white border-0"
                >
                  <Row className="align-items-center">
                    <Col className="">
                      <h3 className="mb-2">Upload Spreadsheet</h3>
                      <Input
                        type="file"
                        className="mb-4"

                      />
                      <Button color="primary" size="sm">
                        Upload
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                
                </Card>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xl="10">
              <Card className="bg-secondary shadow">
                <CardHeader
                  onClick={this.toggleAddForm}
                  className="bg-white border-0"
                >
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Add Product manually</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <Collapse isOpen={this.state.showAddForm}>
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        Product Information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="name"
                              >
                                Product Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="name"
                                placeholder="Product Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="code"
                              >
                                Product Code
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="code"
                                placeholder="Product Code"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="3">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="sizeSelect"
                              >
                                Size
                              </label>
                              <Input
                                type="select"
                                className="form-control-alternative"
                                name="size"
                                id="sizeSelect"
                              >
                                <option value="">-----</option>
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                                <option value="XXL">
                                  Extra Extra Large
                                </option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="3">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="weight"
                              >
                                Weight
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="weight"
                                placeholder="Weight"
                                type="number"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="3">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="shape"
                              >
                                Shape
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="shape"
                                placeholder="Product Shape"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col sm="6" lg="3">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="color"
                              >
                                Color
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="color"
                                placeholder="Product Color"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label htmlFor="exampleSelectMulti">
                                Categories
                              </label>
                              <Select options={categories} isMulti />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label htmlFor="product-image">
                                Product Image
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="product-image"
                                name="image"
                                type="file"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="product-description"
                              >
                                Product Description
                              </label>
                              <Input
                                className="form-control-alternative"
                                placeholder="Product Description"
                                rows="4"
                                id="product-description"
                                type="textarea"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        Manufacturer information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-address"
                              >
                                Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Johnny Ventures"
                                id="input-address"
                                placeholder="Home Address"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="man-email"
                              >
                                Email
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Nigeria"
                                id="man-email"
                                placeholder="Email"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="man-country"
                              >
                                Country
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="man-country"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="man-phone_number"
                              >
                                Phone Number
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="man-phone_number"
                                placeholder=""
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="man-website"
                              >
                                Website
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="man-website"
                                placeholder="Manufacturer website"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="reg-code"
                              >
                                Registration Code
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="reg-code"
                                placeholder="Registration Code"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="man-reg-year"
                              >
                                Registration Year
                              </label>
                              <InputGroup className="input-group-alternative">
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "Date Picker Here",
                                    id: "man-reg-year"
                                  }}
                                  timeFormat={false}
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="man-address"
                              >
                                Address
                              </label>
                              <Input
                                className="form-control-alternative"
                                placeholder="Manufacturer's address"
                                rows="3"
                                id="man-address"
                                type="textarea"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
          </Row>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Products</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Submit Entry
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
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => {
                              e.preventDefault();
                            }}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu
                            className="dropdown-menu-arrow"
                            right
                          >
                            <DropdownItem
                              href="#pablo"
                              onClick={e => {
                                e.preventDefault();
                                this.toggleModal("defaultModal");
                              }}
                            >
                              View
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
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
          </Row>
          {this.renderModal()}
        </Container>
      </React.Fragment>
    );
  }
}

export default CreateEntry;
