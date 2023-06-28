import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';
import Nav from './Nav'
import './courseDetails.css'

import { Document } from 'react-pdf';

function Coursedetails(props) {

  const { state } = useLocation();
  const { currentData } = state;
  const { addItem, items } = useCart();

  console.log("st", state, currentData)
  
  const {
    emptyCart
  } = useCart()


  const addToCart = () => {
    console.log('22', items)
    //emptyCart()

    addItem(currentData);
    alert("Added Successfully")

  }
  var myVideo = document.getElementById("video");
  function makeSmall() {
    myVideo.width = 320;
  }

  return (
    <div>
      <Nav />
      <div className='card-container'>
        {/* <img src="imgs.jpg"></img> */}
        <div className="card-1 ">
          <h4><b>{currentData.coursesName}</b></h4>

          <h5> created{currentData.author}</h5>
          <h6>English</h6>
          <p >{currentData.totalTime}</p>
          <p ><b>{currentData.price}</b></p>
          <Document file={currentData.pdf} />
        </div>
        <div className='card-2'>
          <Card >
            <Card.Body>
              <h4>preview this course</h4>
              <video
                id='video'
                className='react-player'
                src={currentData.video}
                onclick="makeSmall()"
                width='100%'
                height='100%'
                type="video/mp4"
                controls={true}
              > </video>

              <h4>{state.priceAll}</h4>
              <h5>This course includes</h5>
              <i className="fa fa-youtube-play"></i>
              <p >{currentData.hours}</p>
              <p>{currentData.article}</p>
              <p>{currentData.certificate}</p>

              {/* <button type="button" className="btn btn-primary">
         
              Add to cart
              </button><br/><br/> */}
              <button
                onClick={() => addToCart()}
                className="btn btn-primary">
                Add to cart
              </button>


            </Card.Body>

          </Card>

        </div>

      </div>
    </div>
  )
}

export default Coursedetails