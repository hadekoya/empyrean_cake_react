import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
// import Directory from "./DirectoryComponent";
// import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomepageComponent";
import Appointment from "./AppointmentComponent";

// import Contact from "./ContactComponent";
import About from "./AboutComponent";

import { CAKES } from "../shared/products";

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

    return (
      <div>
        <Header />
       <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/appointment" component={Appointment} />
         {/*   <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.props.campsites} />}
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Route exact path="/contactus" component={Contact} />
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