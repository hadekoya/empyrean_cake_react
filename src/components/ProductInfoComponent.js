import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,Badge
  // Button,
  // Modal,
  // ModalHeader,
  // ModalBody,
  // Label,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderProductInfo({ product }) {
  return (
    <React.Fragment>
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={product.image} alt={product.name} />
        <CardBody>
          <CardText><h4>{product.price}</h4></CardText>
        </CardBody>
      </Card>
    </div>

    <div className="col-md-5 m-1">
        <h4>Description</h4>
        <p>{product.description}</p>
             <Badge color="info" pill>{product.category}</Badge>
    </div>

    </React.Fragment>
  );
}

function ProductInfo(props) {
  
  if (props.product) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
                <BreadcrumbItem>
                <Link to="/home">Home</Link>
                </BreadcrumbItem>
               
              <BreadcrumbItem>
                <Link to="/catalog">Catalog</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.product.name}</h2>
            <hr />
          </div>
        </div>
       <div className="row">
          <RenderProductInfo product={props.product} />
          {/* <RenderComments comments={props.comments} /> */}
        </div> 
      </div>
    );
  }
  return <div />;
}
export default ProductInfo;