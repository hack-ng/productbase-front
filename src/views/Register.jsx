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
  Col
} from "reactstrap";

class Register extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    username: '',
    password: ''
  };


  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign up with credentials</small>
              </div>
              <Form onSubmit={this.onSubmit} role="form">
                <FormGroup>
                  <Row>
                    <Col md={6}>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="first_name"
                          placeholder="First Name"
                          type="text"
                          required
                          onChange={this.onChange}
                          value={this.state.first_name}

                        />
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="last_name"
                          placeholder="Last Name"
                          type="text"
                          required
                          onChange={this.onChange}
                          value={this.state.last_name}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col md={6}>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                          onChange={this.onChange}
                          value={this.state.email}
                        />
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="phone_number"
                          placeholder="Phone number"
                          type="text"
                          required
                          onChange={this.onChange}
                          value={this.state.phone_number}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="username"
                      placeholder="Username"
                      type="text"
                      required
                      onChange={this.onChange}
                      value={this.state.username}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      required
                      onChange={this.onChange}
                      value={this.state.password}
                    />
                  </InputGroup>
                </FormGroup>
                {/* <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div> */}
                <Row className="my-4">
                  {/* <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col> */}
                </Row>
                <div className="text-center">
                  <Input
                    type="submit"
                    value="Create Account"
                    className="mt-4 btn btn-primary"
                  
                  />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
