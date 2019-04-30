/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-2" style={{position: "fixed", bottom: 16, left: 16, width: '100%'}}>
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2019{" "}
                  <a
                    className="font-weight-bold ml-1"
                    href="#"
                    target="_blank"
                  >
                   ProductBase
                  </a>
                </div>
              </Col>
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
                  {/* <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      ProductBase
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem> */}
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
