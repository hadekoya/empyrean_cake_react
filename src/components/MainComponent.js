import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import ServiceCatalog from "./ServiceCatalogComponent";
import ProductInfo from "./ProductInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomepageComponent";
import Contact from "./ContactComponent";
import Appointment from "./AppointmentComponent";
import About from "./AboutComponent";

import { CAKES } from "../shared/products";
import { ABOUTCAMPAIGN } from "../shared/about";
import { FEATURECAMPAIGN } from "../shared/featurecakes";

 import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     campsites: state.campsites,
//     comments: state.comments,
//     partners: state.partners,
//     promotions: state.promotions,
//   };
// };
class Main extends Component {
  //   onCampsiteSelect(campsiteId) {
  //     this.setState({ selectedCampsite: campsiteId });
  //   }
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
      feature: FEATURECAMPAIGN,
      about: ABOUTCAMPAIGN,
      
      //selectedCampsite: null,
    };
  }
  render() {
    // const HomePage = () => {
    //   return (
    //     <Home
    //       campsite={
    //         this.props.campsites.filter((campsite) => campsite.featured)[0]
    //       }
    //       promotion={
    //         this.props.promotions.filter((promotion) => promotion.featured)[0]
    //       }
    //       partner={this.props.partners.filter((partner) => partner.featured)[0]}
    //     />
    //   );
    // };

    // const CampsiteWithId = ({ match }) => {
    //   return (
    //     <CampsiteInfo
    //       campsite={
    //         this.props.campsites.filter(
    //           (campsite) => campsite.id === +match.params.campsiteId
    //         )[0]
    //       }
    //       comments={this.props.comments.filter(
    //         (comment) => comment.campsiteId === +match.params.campsiteId
    //       )}
    //     />
    //   );
    // };
    const ProductWithId = ({ match }) => {
      return (
          <ProductInfo
          product={
            this.state.cakes.filter(
              (cake) => cake.id === +match.params.productid
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Header />
       <Switch>
          {/* <Route path="/home" component={Home} /> */}
          {/* <Route path="/about" component={About} /> */}
          <Route path="/appointment" component={Appointment} />
          <Route path="/contact" component={Contact} />
            <Route
            exact
            path="/about"
            render={() => <About about={this.state.about} title="About us" />}
          />
          <Route
            exact
            path="/home"
            render={() => <Home feature={this.state.feature} title="" />}
          />
          <Route
            exact
            path="/catalog"
            render={() => <ServiceCatalog cakes={this.state.cakes} />}
          />
          <Route path="/catalog/:productid" component={ProductWithId} />

          {/*
          <Route path="/directory/:campcontactussiteId" component={CampsiteWithId} />
          <Route exact path="/" component={Contact} />
          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.props.partners} />}
          />  */}
          <Redirect to="/home" />
        </Switch>
      
        <Footer />
      </div>
    );
  }
}
export default Main;
//export default withRouter(connect(mapStateToProps)(Main));
