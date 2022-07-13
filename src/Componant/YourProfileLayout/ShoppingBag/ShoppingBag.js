import React from "react";
import "../../../Componant/style.css";
import Meat from "../../../img/meat.png";
import Quit from "../../../img/quit 1.png";
import Cofee from "../../../img/coffe.png";
import ShoppingBagData from "../../../Data/ShoppingBagData";
import OrderSummary from "../../../Data/OrderSummary";
import { Col, Container, Row } from "react-bootstrap";
// import Row from 'react-bootstrap'

const ShoppingBag = () => {
  return (
    <>
      {/* shopping bag  */}

      <div className="shopping-bag pb-5">
        {/* <div className="container"> */}
        <Container>
          <div className="d-flex justify-content-center py-5">
            <h3>{ShoppingBagData.yourShopping}</h3>
            <h3 className="text-danger ps-2">{ShoppingBagData.Bag}</h3>
          </div>

          {/* <div className="row "> */}
          <Row>
            {/* <div className="col-lg-8 col-md-8 col-sm-8   pb-5 "> */}
            <Col lg={8} md={8} sm={8}>
              <div>
                <h6>{ShoppingBagData.itemDetails}</h6>
              </div>
              <hr />
              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src={Meat} alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>{ShoppingBagData.itemHeading}</h6>
                        <p>{ShoppingBagData.itemquantity}</p>
                        <h5 className="text-danger">
                          {ShoppingBagData.itemPrice}
                        </h5>
                        <p>{ShoppingBagData.itemweight}</p>
                      </div>
                      <div>
                        <img className="img-fluid" src={Quit} alt="" />
                      </div>
                    </div>

                    <div className="inc-dec-btn pb-4 pt-2">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example bg-white "
                      >
                        <button
                          type="button"
                          className="btn btn-outline-none bg-white  py-0 my-0 rounded-3"
                        >
                          {ShoppingBagData.decBtn}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3"
                        >
                          {ShoppingBagData.val}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white rounded-3"
                        >
                          {ShoppingBagData.incBtn}
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src={Cofee} alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>{ShoppingBagData.itemHeading}</h6>
                        <p>{ShoppingBagData.itemquantity}</p>
                        <h5 className="text-danger">
                          {ShoppingBagData.itemPrice}
                        </h5>
                        <p>{ShoppingBagData.itemweight}</p>
                      </div>
                      <div>
                        <img className="img-fluid" src={Quit} alt="" />
                      </div>
                    </div>

                    <div className="inc-dec-btn pb-4 pt-2">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example bg-white "
                      >
                        <button
                          type="button"
                          className="btn btn-outline-none bg-white  py-0 my-0 rounded-3"
                        >
                          {ShoppingBagData.decBtn}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3"
                        >
                          {ShoppingBagData.val}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white rounded-3"
                        >
                          {ShoppingBagData.incBtn}
                        </button>
                      </div>
                    </div>
                  </div>

                  <hr />
                </div>
              </div>
              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src={Meat} alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>{ShoppingBagData.itemHeading}</h6>
                        <p>{ShoppingBagData.itemquantity}</p>
                        <h5 className="text-danger">
                          {ShoppingBagData.itemPrice}
                        </h5>
                        <p>{ShoppingBagData.itemweight}</p>
                      </div>
                      <div>
                        <img className="img-fluid" src={Quit} alt="" />
                      </div>
                    </div>

                    <div className="inc-dec-btn pb-4 pt-2">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example bg-white "
                      >
                        <button
                          type="button"
                          className="btn btn-outline-none bg-white  py-0 my-0 rounded-3"
                        >
                          {ShoppingBagData.decBtn}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3"
                        >
                          {ShoppingBagData.val}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white rounded-3"
                        >
                          {ShoppingBagData.incBtn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-grid gap-2 col-6  py-4 ">
                <button className="btn btn-danger" type="button">
                  {ShoppingBagData.button}
                </button>
              </div>
            </Col>

            <Col lg={4} md={4}>
              <div className="pt-1 pb-1">
                <h6>{OrderSummary.OrderSummeryHeading}</h6>
              </div>
              <div className="bg-white rounded-3 container py-3 ">
                <div className="d-flex justify-content-between">
                  <div>Sub-total:</div>
                  <div>{OrderSummary.SubTotal}</div>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <div>Shipping:</div>
                  <div>{OrderSummary.Shipping}</div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div>Coupon discount:</div>
                  <div className="text-danger">Apply Coupon</div>
                </div>

                <div className="d-flex justify-content-between py-2">
                  <div>vat(15%):</div>
                  <div>{OrderSummary.Vat}</div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>Total amount:</div>
                  <div>{OrderSummary.TotalAmount}</div>
                </div>
              </div>

              <div className="d-grid gap-2 col-12 mx-auto py-3">
                <button className="btn btn-danger" type="button">
                  {OrderSummary.CheckOut}
                </button>
              </div>
            </Col>
          </Row>
          {/* </div> */}
        </Container>
        {/* </div> */}
      </div>
    </>
  );
};

export default ShoppingBag;
