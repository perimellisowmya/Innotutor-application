import React from 'react'
import './Payment.css'

const PaymentMode=()=> {
  return (
    
      <div className=" col-4  mt-8 p-4 object  ">
  <form  action="orderPlaced " method="get">
        <div className="card rounded-2 cartprice">
          <h3 className='text '>Choose your Payment</h3><br/>
          <div>
            <button type="submit" className="btn btn-warning btn-block">Credit Card</button>
          </div>
          <br/>
          <div>
            <button type="submit" className="btn btn-warning btn-block">Debit Card</button>
          </div>
          <br/>
          <div>
            <button type="submit" className="btn btn-warning btn-block">Net Banking</button>
          </div>
          <br/>
          <div>
            <button type="submit" className="btn btn-warning btn-block">UPI</button>
          </div>
          <br/>
          <div>
            <button type="submit" className="btn btn-warning btn-block">Cash on Delivery</button>
          </div>
          </div>
  </form>
</div>
 
  )
  }
export default PaymentMode