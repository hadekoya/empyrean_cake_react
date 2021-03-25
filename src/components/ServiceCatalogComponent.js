import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";

function RenderCardItem({ cake }) {
  return (
      <React.Fragment>
            
              <div className="card h-100" category={cake.category}>
                <a href={`/catalog/${cake.id}`}
                  ><img className="card-img-top" src={cake.image} alt=""
                /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{cake.name}</a>
                  </h4>
                  <h5>{cake.price}</h5>
                  <p className="card-text">
                    {cake.description}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{ ReactHtmlParser(starString(cake.ratings))}</small>
                </div>
              </div>
            
    </React.Fragment>
  );
}
function starString(number){
    let str = "";
    for (var i=0; i<5;i++){
        if (i < number)
        {
            str+="&#9733; "
        }
        else{
            str+="&#9734; "
        }
    }
    return str;
}

function ServiceCatalog(props) {
  const catalog = props.cakes.map((cake) => {
    return (
    <div key={cake.id} className="col-lg-4 col-md-6 mb-4">
        <RenderCardItem cake={cake} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
            <div className="col">
            <Breadcrumb>
                <BreadcrumbItem>
                <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Catalog</BreadcrumbItem>
            </Breadcrumb>
            <h2>Product Catalog</h2>
            <hr />
            </div>
      </div>
      <div className="row">
        <div className="col-md-3">
            <p>Filter:</p>
            <div className="list-group">
                <li href="#" value="birthday cake" className="list-group-item list-group-item-action active">Birthday Cake</li>
                <li href="#" value="wedding cake" className="list-group-item list-group-item-action">Wedding Cake</li>
                <li href="#" value="cup cake" className="list-group-item list-group-item-action">Cup Cake</li>
                <li href="#" value="custom cake" className="list-group-item list-group-item-action">Custom Cake</li>
                <li href="#" value="view all" className="list-group-item list-group-item-action">View all cake</li>
            </div>
        </div>

        <div class="col-lg-9 mt-5">
            <div class="row">
                
                    {catalog}
                
            </div>
        </div>
        
    </div>
    </div>
  );
}

export default ServiceCatalog;
