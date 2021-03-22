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


class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      <div className="jumbotron jumbotron-fluid"><div className="container"><div className="row row-content"><div className="col-md-7"><div id="homeCarousel" className="carousel slide" data-ride="carousel"><ol className="carousel-indicators"><li data-target="#homeCarousel" data-slide-to="0" className="active"></li><li data-target="#homeCarousel" data-slide-to="1" className=""></li><li data-target="#homeCarousel" data-slide-to="2" className=""></li></ol><div class="carousel-inner"><div class="carousel-item active"><img className="d-block w-100 rounded" src="/assets/images/logan-item.png" alt="Breadcrumb Trail Campground"/></div><div className="carousel-item"><img className="d-block w-100 rounded" src="/assets/images/kelly-item.png" alt="React Lake Campground"/></div><div className="carousel-item"><img className="d-block w-100 rounded" src="/assets/images/deva-item.png" alt="Chrome River Campground"/></div></div><a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span> </a><a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next"><span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a></div></div><div className="col-md-3 mx-auto"><h2>Empyrean Cakes</h2><p>Heavenly delight at your doorstep! Let us bring our exquisite treats to your event leaving yours guest with great memories. There should always be a cake for every occassion.</p><p className="lead"><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p></div></div></div></div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-11 border border-warning rounded p-3 mx-auto">
            <span>
              <b>Note</b>: COVID restriction in place. Please make appointment
              before visiting store
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i
                  >Location
                </h5>
                <p className="card-text">
                  123 Main St, <br />
                  Livingston, New Jersey<br />
                  07039
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa fa-clock-o fa-fw w3-xxlarge w3-margin-right"></i
                  >Hours
                </h5>
                <p className="card-text">
                  Monday - Friday: 9am - 4pm <br />
                  Saturday: 10am - 1pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa fa-comment fa-fw w3-xxlarge w3-margin-right"></i
                  >Contact
                </h5>
                <p className="card-text">
                  <a role="button" className="btn btn-link" href="tel:+19735551234"
                    ><i className="fa fa-phone"></i> 1-973-555-1234</a
                  >
                  <a
                    role="button"
                    className="btn btn-link"
                    href="mailto:info@empyreancakes.xyzß"
                    ><i className="fa fa-envelope-o"></i> info@empyreancakes.xyz</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="row row-content p-3">
        <div className="col-5 offset-1">
          <h2>Birthdays</h2>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem accusantium commodi dicta maiores maxime reiciendis quia voluptatem ipsam facere laborum fugiat aperiam assumenda tempore temporibus cum accusamus eligendi, consequatur beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non repellat ad repellendus. Eaque blanditiis inventore totam veritatis, reprehenderit dignissimos fugiat? Soluta, fugiat in! Molestiae non repudiandae aut. Et, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="col-5">
            <img src="/assets/images/jibbs-item.png" className="img-fluid rounded d-block w-100"/>
        </div>
        <div className="col"></div>
      </div>


      <div className="row row-content p-3"><div className="col-5 offset-1"><img src="/assets/images/wedding-cake.png" className="img-fluid rounded d-block w-100"/></div><div className="col-5"><h2>Weddings</h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem accusantium commodi dicta maiores maxime reiciendis quia voluptatem ipsam facere laborum fugiat aperiam assumenda tempore temporibus cum accusamus eligendi, consequatur beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non repellat ad repellendus. Eaque blanditiis inventore totam veritatis, reprehenderit dignissimos fugiat? Soluta, fugiat in! Molestiae non repudiandae aut. Et, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div><div className="col"></div></div>
   </React.Fragment>
    );
  }
}
export default Homepage;
