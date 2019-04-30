import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroup,
  Row,
  // PaginationItem,
  Modal,
  // PaginationLink,
  CardFooter,
  // Pagination,
  Col
} from "reactstrap";

import ProductsTable from "../components/ProductsTable";
import Loader from "../components/Loader"

import { connect } from "react-redux";

import { fetchProducts } from "../store/actions/products";


class Home extends React.Component {
  state = {
    showModal: false,
    activeProduct: null,
    query: ''
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

  onSubmit = async () => {
    const { query } = this.state
    if (!query){
      return
    }
    console.log("got here")
    await this.props.fetchProducts(query)
    console.log("after la action call")

  }

  submitOnEnter = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false){
      this.onSubmit()
    }
  }

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
                <img
                  src={product.image}
                  style={{ width: 150, height: 150 }}
                />
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



  render() {
    console.log(this.props)
    return (
      <>
      {this.props.loading ? <Loader/>: null}
        <Col lg="6" md="8" sm="10" className="mb-4 mx-auto">
          <Form onSubmit={e => e.preventDefault()} className="mx-3">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <Input
                  placeholder="Search Product Name or Manufacturer"
                  type="text"
                  onChange={e => this.setState({query: e.target.value})}
                  value={this.state.query}
                  onKeyDown={this.submitOnEnter}
                />
                <InputGroupAddon addonType="prepend">
                  <Button color="success" style={{zIndex: 0}} onClick={e => {e.preventDefault(); this.onSubmit()}}>
                    <i className="fas fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>

        <Col lg="10">
          <div className="col">
            {this.props.products ? <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Products</h3>
              </CardHeader>
              <ProductsTable
                products={this.props.products}
                onView={this.showProductModal}
              />
              <CardFooter className="py-4">
                {/* <nav aria-label="...">
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
                </nav> */}
              </CardFooter>
            </Card>: null}
          </div>
        </Col>
        {this.renderModal()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error
  };
};

const mapDispatchToProps = {
  fetchProducts
};

const HomeWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeWithRedux;
