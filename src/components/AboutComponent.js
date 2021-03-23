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


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
      console.log(this.props);
    console.log(this.props.about.length);
    for (var i = 0; i < this.props.about.length; i++) {
        rows.push(
        <div key={this.props.about[i].id} className="row row-content p-3">
            <div className="col-sm-1 d-md-block"></div>
            <div class="col-sm-6"><span>{this.props.about[i].description} </span></div>
            <div class="col-sm-5">
                <img src={this.props.about[i].image} class="img-fluid rounded d-block w-100"/>
            </div>
        </div>
        );
    }

    return (
    <React.Fragment>
            <div className="row row-content p-3">
            <div className="col offset-1">
                <h2>About us</h2>
            </div>
        </div>
        {rows}
    </React.Fragment>
    );
  }
}
export default About;

/*
<React.Fragment>
        <div className="row row-content p-3">
            <div className="col offset-1">
                <h2>About us</h2>
            </div>
        </div>
      <div className="row row-content p-3">
        <div className="col-sm-1 d-md-block"></div>
        <div class="col-sm-6">
            <span>Empyrean Cakes was born out of a curiosity in baking and a desire to eat and share with our family, delicious homemade treats whenever I wanted. What started out as an experiment eventually evolved into a passion. Our red velvet cake the most requested flavor and is still the #1 seller in the shop. Of course, we dont just stop at one flavor. We are glad to be able to share these delicious, moist and uniquely flavored cake creations with you. These days, we start every day with the purest of ingredients, from 100% Madagascar bourbon vanilla, dark rich cocoa, seasonal fruits, exotic spices and the freshest dairy and eggs we can find. We bake everything from scratch, all day long, in small throughout the day to ensure you get your cakes and cupcakes as fresh as possible. Our delectable treats are always free from preservatives, artificial flavorings and trans fats. Come in and try something with a cup of cold milk or a cup of fair trade organic hot or iced coffee sourced from a local roaster.</span>
        </div>
        <div class="col-sm-5">
            <img src="/assets/images/store.png" class="img-fluid rounded d-block w-100"/>
        </div>
      </div>
      <div className="row p-3 flex-column-reverse flex-sm-row">
        <div className="col-md-5 d-md-block offset-md-1">
            <img src="/assets/images/customer service.png" className="img-fluid rounded d-block w-100"/>
        </div>
        <div className="col-sm-6">
            <span>Empyrean Cakes is the leading cake decorating and sugarcraft store in North New Jersey. We offer a fabulous range of cake decorations (Birthday Cake, Wedding Cake, 3D Cake, Cup Cake) - with super fast delivery available. With so many cake decorating options, we are sure you will find what you are looking for. Our friendly customers service team are here to help if you need any advice.</span>
        </div>
        <div className="col"></div>
      </div>
        </React.Fragment>
 */