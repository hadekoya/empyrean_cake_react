import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row className="site-footer">
          <Col sm={{ size: 5, offset: 1 }}>
            <h5>Social</h5>
            <a
              class="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i class="fa fa-instagram fa-2x"></i>
            </a>
            <a
              class="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i class="fa fa-facebook fa-2x"></i>
            </a>
            <a
              class="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i class="fa fa-twitter fa-2x"></i>
            </a>
            <a
              class="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i class="fa fa-youtube fa-2x"></i>
            </a>
          </Col>
          <Col sm={{ size: 4, offset: 1 }}>
            <h5>Contact</h5>
            <a role="button" class="btn btn-link" href="tel:+13477207757">
              <i class="fa fa-phone"></i> 1-347-720-7757
            </a>
            <a
              role="button"
              class="btn btn-link"
              href="mailto:info@empyreancakes.xyz"
            >
              <i class="fa fa-envelope-o"></i> info@empyreancakes.xyz
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Footer;
