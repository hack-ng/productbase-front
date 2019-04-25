import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Button,
  Modal,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import EntriesTable from "components/EntriesTable";
import ProductsTable from "components/ProductsTable";

import { connect } from "react-redux";

class Entries extends React.Component {
  state = {
    activeEntry: null,
    activeProduct: null,
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  showProductModal = product => {
    this.setState({ activeProduct: product });
    this.toggleModal();
  };


  renderModal = () => {
    const product = this.state.activeProduct;
    if (product)
      return (
        <Modal
          size="lg"
          isOpen={this.state.showModal}
          toggle={() => this.toggleModal()}
        >
          <div className="modal-header">
            <h3 className="modal-title" id="modal-title-default">
              {product.name}
            </h3>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal()}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <Row>
              <Col className="text-center mb-3" lg={3}>
                <img src={product.image} style={{ width: 150, height: 150 }} />
              </Col>

              <Col lg={9}>
                <Row className="mb-3">
                  <Col xs="7">
                    <h4 className="">Product Name</h4>
                    <span>{product.name}</span>
                  </Col>
                  <Col xs="5">
                    <h4 className="">Code</h4>
                    <span>{product.code}</span>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs="4" md={3}>
                    <h4 className="">Size</h4>
                    <span>{product.size || "N/A"}</span>
                  </Col>
                  <Col xs="4" md={3}>
                    <h4 className="">Weight</h4>
                    <span>{product.weight || "N/A"}</span>
                  </Col>
                  <Col xs="4" md={3}>
                    <h4 className="">Shape</h4>
                    <span>{product.shape || "N/A"}</span>
                  </Col>
                  <Col xs="4" md={3}>
                    <h4 className="">Color</h4>
                    <span>{product.color || "N/A"}</span>
                  </Col>
                </Row>

                <div className="">
                  <h4 className="">Description</h4>
                  <p>{product.description || "N/A"}</p>
                </div>
                <hr />

                <Row className="mb-3">
                  <Col>
                    <h4>Manufacturer's Name</h4>
                    <p> {product.manufacturer.name || "N/A"} </p>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={6}>
                    <h4>Country</h4>
                    <p> {product.manufacturer.country}</p>
                  </Col>
                  <Col md={6}>
                    <h4>Email Address</h4>
                    <p> {product.manufacturer.email || "N/A"} </p>
                  </Col>
                  <Col md={6}>
                    <h4>Mobile Number</h4>
                    <p> {product.manufacturer.phone_number || "N/A"} </p>
                  </Col>
                  <Col md={6}>
                    <h4>Website</h4>
                    <p> {product.manufacturer.website || "N/A"} </p>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <h4>Reg Code</h4>
                    <p> {product.manufacturer.reg_code || "N/A"} </p>
                  </Col>
                  <Col md={6}>
                    <h4>Reg Year</h4>
                    <p> {product.manufacturer.reg_year || "N/A"} </p>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <h4>Address</h4>
                    <p>{product.manufacturer.address || "N/A"}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="modal-footer">
            {/* <Button color="primary" type="button">
              Edit
            </Button> */}
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal()}
            >
              Close
            </Button>
          </div>
        </Modal>
      );
  };

  renderProducts = () => {
    if (this.state.activeEntry) {
      return (
        <Card className="shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Products</h3>
              </Col>
              <Col className="text-right" xs="4">
                <Button
                  color="success"
                  onClick={e => e.preventDefault()}
                  size="sm"
                >
                  Approve
                </Button>
                <Button
                  color="danger"
                  onClick={e => e.preventDefault()}
                  size="sm"
                >
                  Reject
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <ProductsTable products={this.state.activeEntry.products} onView={this.showProductModal} />

          {/* <Table
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
                </Table> */}
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
      );
    }
  };

  setActiveEntry = entry => {
    this.setState({ activeEntry: entry });
  };

  render() {
    return (
      <React.Fragment>
        <Header hideSummary={true} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row className="mb-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Entries</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <EntriesTable
                  entries={this.props.entries || []}
                  onClick={this.setActiveEntry}
                />
                {/* <Table
                  className="align-items-center table-flush"
                  responsive
                  hover
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Author</th>
                      <th scope="col">Products count</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date Created</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Teenoh</td>
                      <td>33</td>
                      <td>Approved</td>
                      <td>22-03-2019</td>
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
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => {
                                e.preventDefault();
                                this.toggleModal("defaultModal");
                              }}
                            >
                              Approve
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Decline
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table> */}
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
          {/* Table */}

          <Row className="mb-5">
            <div className="col">{this.renderProducts()}</div>
          </Row>
          { this.renderModal() }
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { entries: state.entries.entries };
};

const mapDispatchToProps = {};

const EntriesWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);

export default EntriesWithRedux;
