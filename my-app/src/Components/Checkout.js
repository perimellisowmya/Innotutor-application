import Form from 'react-bootstrap/Form';
import './Checkout.css'
import './Cart.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { useCart } from 'react-use-cart';

//import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';

function Checkout() {
    const {
        cartTotal,

    } = useCart();
    return (
        <div>
            <div className='row justify-content-center back'>

                <div className='col-6'>
                    <Form>

                        <div className=' back ms-3 me-2 mt-5 row '>

                            <h3>Billing Details</h3>
                            <div className=" ">
                                <label for="firstname" className="form-label">Firstname</label>
                                <input type="name" class="form-control" />
                            </div>
                            <div className="">
                                <label for="firstname" className="form-label">Lastname</label>
                                <input type="name" class="form-control" />

                            </div>

                            <p>Country- <b> India</b></p>
                            <div className=''>

                                <div className=" ">
                                    <label for="firstname" className="form-label">Address (Line-1)</label>
                                    <input class="form-control" type="addressline1"
                                        id="addressline1"
                                        placeholder='House number and Street name' />
                                </div>

                                <div className=" ">
                                    <label for="addressline2" className="form-label">Address (Line-2)</label>
                                    <input class="form-control" type="addressline2"
                                        id="addressline2"
                                        placeholder='Apartment,suite,unit etc.(optional)' />
                                </div>

                                <div className=" ">
                                    <label for="post/code" className="form-label">Post/Code</label>
                                    <input class="form-control" type="post/code"
                                        id="post/code"
                                        placeholder='Pincode' />
                                </div>


                                <div className=" ">
                                    <label for="town/city" className="form-label">Town/City</label>
                                    <input class="form-control" type="town/city"
                                        id="town/city"
                                    />
                                </div>
                                <div className=" ">
                                    <label for="phone" className="form-label">Phone</label>
                                    <input class="form-control" type="phone"
                                        id="phone"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label for="add" className="form-label">Additional Information</label>
                                    <textarea class="form-control" type="text-area"
                                        id="add"
                                    />
                                </div>

                            </div>

                        </div>

                    </Form>
                </div>

                <div className="col-3 h-50 mt-5 p-4 cartprice " >
                    <h3>The Total Amount</h3>
                    <span className='row mt-4 rowwise'>
                        <p className='text-start col-6'>Amount payable</p> <h4 className='text-end col-6'>#price</h4>
                    </span>
                    <span className='row rowwise'>
                        <p className='text-start col-6'>Shipping</p> <h4 className='text-end col-6'>Gratis</h4>
                    </span>

                    <hr />
                    <div className="row mt-4 amount">
                        <div className='col-8 text-start amountline'>
                            <h6 >Total amount </h6>
                            <h5>{cartTotal} </h5>
                        </div>
                        <div className='col-4 text-end amountmiddle'>
                        </div>
                    </div>
                    <Button variant="danger"
                        className="m-2">
                        <Link to="/PaymentMode">Pay Now</Link>
                    </Button>


                </div>

            </div>

        </div>
    );
}
export default Checkout;


