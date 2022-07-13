import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import KnowUs from "../../../Data/ImportantLinkData/KnowUs";
import MonMetro from "../../../Data/ImportantLinkData/MonMetro";
import WhatWeOffer from "../../../Data/ImportantLinkData/WhatWeOffer";

const ImportantLink = () => {
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
                  <b>{MonMetro.MonMetroHeading}</b>
                </h6>
              </div>
              <ul className="text-white d-flex flex-column justify-content-center ">
                <li className="">
                  <a className="text-white " href="/">
                    {MonMetro.OnlineGrocery}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.OnlineGrocery}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.Coupons}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.RecipesAndOccasions}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.ProductsToDiscover}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.Metromoi}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.JustForMe}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.MetroPriority}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {MonMetro.Cornershop}
                  </a>
                </li>
              </ul>

              {/* </div> */}
            </Col>
            <Col>
              <div className="ps-4 pb-4 pt-5">
                <h6 className="text-white ">
                  <b>{WhatWeOffer.heading}</b>
                </h6>
              </div>
              <ul className="text-white d-flex flex-column justify-content-center ">
                <li>
                  <a className="text-white " href="/">
                    {WhatWeOffer.OnlineGrocery}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {WhatWeOffer.OurPrivateBrands}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {WhatWeOffer.OurPartners}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {WhatWeOffer.ervices}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {WhatWeOffer.ProductsToDiscover}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {WhatWeOffer.GiftCard}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {WhatWeOffer.Contests}
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <div className="ps-4 pb-4 pt-5">
                <h6 className="text-white ">
                  <b>{KnowUs.heading}</b>
                </h6>
              </div>
              <ul class="text-white d-flex flex-column justify-content-center ">
                <li>
                  <a className="text-white " href="/">
                    {KnowUs.site}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {KnowUs.relation}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {KnowUs.AboutUs}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {KnowUs.MetroGreen}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {KnowUs.Responsibility}
                  </a>
                </li>
                <li>
                  <a className="text-white " href="/">
                    {KnowUs.Careers}
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
