import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const ImportantLink = (props) => {
  return (
    <>
      {/* important links  */}

      <div className="important-links ps-5 pe-5">
        <Container>
          {/* <div class="row g-0 container pb-4"> */}
          <Row className="pb-4 g-0">
            {/* <div class="col "> */}
            <Col>
              {/* <div class="container"> */}

              <div className="ps-4 pb-4 pt-5">
                <h6 className="text-white ">
                  <b>{props.monoMetro.MonMetroHeading}</b>
                </h6>
              </div>
              <ul className="text-white d-flex flex-column justify-content-center ">
                <li className="">
                  <a className="text-white " href="/">
                    {props.monoMetro.OnlineGrocery}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.OnlineGrocery}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.Coupons}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.RecipesAndOccasions}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.ProductsToDiscover}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.Metromoi}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.JustForMe}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.MetroPriority}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.monoMetro.Cornershop}
                  </a>
                </li>
              </ul>

              {/* </div> */}
            </Col>
            <Col>
              <div className="ps-4 pb-4 pt-5">
                <h6 className="text-white ">
                  <b>{props.whatWeOffer.heading}</b>
                </h6>
              </div>
              <ul className="text-white d-flex flex-column justify-content-center ">
                <li>
                  <a className="text-white " href="/">
                    {props.whatWeOffer.OnlineGrocery}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.whatWeOffer.OurPrivateBrands}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.whatWeOffer.OurPartners}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.whatWeOffer.ervices}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.whatWeOffer.ProductsToDiscover}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.whatWeOffer.GiftCard}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.whatWeOffer.Contests}
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <div className="ps-4 pb-4 pt-5">
                <h6 className="text-white ">
                  <b>{props.knowUs.heading}</b>
                </h6>
              </div>
              <ul class="text-white d-flex flex-column justify-content-center ">
                <li>
                  <a className="text-white " href="/">
                    {props.knowUs.site}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.knowUs.relation}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.knowUs.AboutUs}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.knowUs.MetroGreen}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.knowUs.Responsibility}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {props.knowUs.Careers}
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          {/* </div> */}
        </Container>
      </div>
    </>
  );
};

export default ImportantLink;
