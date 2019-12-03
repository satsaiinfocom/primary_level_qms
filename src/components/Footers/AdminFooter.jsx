/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2020{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://www.satsaiinfocom.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sat Sai Infocom
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Stock Management
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Inventory Management
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Purchase
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Sales
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
