
import React from 'react'
import Meat from '../../../img/meat.png'
import Quit from '../../../img/quit 1.png'
import Cofee from '../../../img/coffe.png'

const ShoppingBag = () => {
  return (
   <>
        {/* shopping bag  */}

<div class="shopping-bag pb-5">
    <div class="container">
        <div class="d-flex justify-content-center py-5">
            <h3>Your shopping</h3>
            <h3 class="text-danger ps-2">Bag</h3>

        </div>


        <div class="row ">
            <div class="col-lg-8 col-md-8 col-sm-8   pb-5 ">
                <div>
                    <h6>Item Details</h6>
                </div>
                <hr />
                <div class="d-flex ">
                    <div>
                        <img class="img-fluid" src={Meat} alt="meat"/>
                    </div>
                    <div class="w-100">

                        <div class="ps-4 ">
                            <div class="d-flex justify-content-between ">
                                <div>
                                    <h6>La Carne Mutton seekh kebab</h6>
                                    <p>500g per tray</p>
                                    <h5 class="text-danger">$16.75 ea</h5>
                                    <p>400g avg.</p>
                                </div>
                                <div>
                                    <img class="img-fluid" src={Quit} alt=""/>
                                </div>
                            </div>
                            
                            
                            <div class="inc-dec-btn pb-4 pt-2">
                                <div class="btn-group" role="group" aria-label="Basic outlined example bg-white ">
                                    <button type="button"
                                        class="btn btn-outline-none bg-white  py-0 my-0 rounded-3">-</button>
                                    <button type="button"
                                        class="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3">1</button>
                                    <button type="button" class="btn btn-outline bg-white rounded-3">+</button>
                                </div>
                            </div>
                            <hr/>
                        </div>

                    </div>
                </div>

                      <div class="d-flex ">
                          <div>
                              <img class="img-fluid" src={Cofee} alt="meat"/>
                          </div>
                          <div class="w-100">

                              <div class="ps-4 ">
                                  <div class="d-flex justify-content-between ">
                                      <div>
                                          <h6>La Carne Mutton seekh kebab</h6>
                                          <p>500g per tray</p>
                                          <h5 class="text-danger">$16.75 ea</h5>
                                          <p>400g avg.</p>
                                      </div>
                                      <div>
                                          <img class="img-fluid" src={Quit} alt=""/>
                                      </div>
                                  </div>
                                  

                                  <div class="inc-dec-btn pb-4 pt-2">
                                      <div class="btn-group" role="group"
                                          aria-label="Basic outlined example bg-white ">
                                          <button type="button"
                                              class="btn btn-outline-none bg-white  py-0 my-0 rounded-3">-</button>
                                          <button type="button"
                                              class="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3">1</button>
                                          <button type="button"
                                              class="btn btn-outline bg-white rounded-3">+</button>
                                      </div>
                                      
                                  </div>
                              </div>
                              
                              <hr/>
                          </div>
                          
                      </div>
                            <div class="d-flex ">
                                <div>
                                    <img class="img-fluid" src={Meat} alt="meat"/>
                                </div>
                                <div class="w-100">

                                    <div class="ps-4 ">
                                        <div class="d-flex justify-content-between ">
                                            <div>
                                                <h6>La Carne Mutton seekh kebab</h6>
                                                <p>500g per tray</p>
                                                <h5 class="text-danger">$16.75 ea</h5>
                                                <p>400g avg.</p>
                                            </div>
                                            <div>
                                                <img class="img-fluid" src={Quit} alt=""/>
                                            </div>
                                        </div>
                                        

                                        <div class="inc-dec-btn pb-4 pt-2">
                                            <div class="btn-group" role="group"
                                                aria-label="Basic outlined example bg-white ">
                                                <button type="button"
                                                    class="btn btn-outline-none bg-white  py-0 my-0 rounded-3">-</button>
                                                <button type="button"
                                                    class="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3">1</button>
                                                <button type="button"
                                                    class="btn btn-outline bg-white rounded-3">+</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <hr/>
                            <div class="d-grid gap-2 col-6  py-4 ">
                                <button class="btn btn-danger" type="button">Continue shopping</button>

                            </div>

            </div>


            <div class="col-lg-4 col-md-4">
               
                <div class="pt-1 pb-1">
                    <h6>Order Summary</h6>
                </div>
                <div class="bg-white rounded-3 container py-3 ">
                    <div class="d-flex justify-content-between">
                        <div>
                            Sub-total:
                        </div>
                        <div>
                            100.00$
                        </div>
                    </div>
                     <div class="d-flex justify-content-between py-2">
                         <div>
                             Shipping:
                         </div>
                         <div>
                             30.00$
                         </div>
                     </div>
                      <div class="d-flex justify-content-between ">
                          <div>
                              Coupon discount:
                          </div>
                          <div class="text-danger">
                              Apply Coupon
                          </div>
                      </div>
                      
                       <div class="d-flex justify-content-between py-2">
                           <div>
                               vat(15%):
                           </div>
                           <div>
                               15.00$
                           </div>
                       </div>
                       <hr/>
                        <div class="d-flex justify-content-between">
                            <div>
                                Total amount:
                            </div>
                            <div>
                                145.00$
                            </div>
                        </div>
                </div>

                <div class="d-grid gap-2 col-12 mx-auto py-3">
                    <button class="btn btn-danger" type="button">Check out</button>
                    
                </div>
            </div>
            
        </div>
    </div>
</div>
   </>
  )
}

export default ShoppingBag