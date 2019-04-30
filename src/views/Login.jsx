import React from "react";

// reactstrap components
import {
  Card,
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

import Loader from "../components/Loader"

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { withToastManager } from "react-toast-notifications";


import { loginUser } from "../store/actions/auth";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    await this.props.loginUser({ ...this.state });

    const { toastManager } = this.props;

    if (this.props.error) {
      for (let x of this.props.error) {
        toastManager.add(`Something went wrong: "${x}"`, {
          appearance: "error",
          autoDismiss: true
        });
      }
      return;
    }

    await toastManager.add(
      `Logged In successfully"`,
      {
        appearance: "success",
        autoDismiss: true
      }
    );

    return setTimeout(() => this.props.history.push("/admin/index"), 4000);

    
  };

  render() {
    
    return (
      <>
      {this.props.loading ? <Loader/>: null}
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
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
                <small>Sign in with credentials</small>
              </div>
              <Form onSubmit={this.onSubmit} role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      name="username"
                      type="text"
                      onChange={this.onChange}
                      value={this.state.email}
                      required
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
                      onChange={this.onChange}
                      value={this.state.password}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div> */}
                <div className="text-center">
                  <Input
                    type="submit"
                    value="Sign In"
                    className="mt-4 btn btn-primary"
                  />
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              {/* <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a> */}
            </Col>
            <Col className="text-right" xs="6">
              <Link to="/auth/register">
                <span className="text-light">
                  <small>Create new account</small>
                </span>
              </Link>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = {
  loginUser
};

const LoginWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

const LoginWithReduxNToast = withToastManager(LoginWithRedux)

export default LoginWithReduxNToast;
