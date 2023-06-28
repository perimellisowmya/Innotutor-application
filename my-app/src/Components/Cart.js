import React from 'react'
import { useCart } from 'react-use-cart'
import { Button } from 'react-bootstrap'
import Nav from './Nav'
import {Col} from 'react-bootstrap'
import { Navigate,useNavigate } from 'react-router-dom'
export default function Cart() {
  const {items,removeItem,isEmpty,cartTotal}=useCart()
  console.log(items)

  const Navigate = useNavigate()
  const routeChange = () => {
    
    Navigate('/paymentmode');

}
  
  return (
    <div>
      <Nav/>

            <div className="card"
                style={{ overflowX: "hidden", overflowY: "scroll", top: "50px", marginbottom: "10px" }}>
                 <h1 className={`my-5 text-center`}>
                {isEmpty? 'Your Cart is Empty' : 'The Cart'}
            </h1>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    {items.map((item) => (
                        <div style={{ width: "20%", margin: "10px" }} >
                            <div className="card-body " style={{ top: "-20px" }}><h5><b>{item.coursesName}</b></h5>
                                {/* <h6>{val.id} </h6> */}
                                <img src={item.image} style={{ cursor: "pointer" }}  className="card-img-top" alt="..." />
                                <h6 > {item.author}</h6>
                                {/* <p >{val.totalTime}</p> */}
                                <p ><b>{item.price}</b></p>
                                <p ><b>{item.quantity}</b></p>

                                <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                <Button variant="primary"  className="ms-2" onClick={() => routeChange()}>Buynow</Button>
                               
                            </div>
                        </div>
                    ))}
                </div>
                <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                           </Col>
            </div>
           
        </div>
  )
}









// import React from 'react'
// import { Button, Container, Col, Row, Table} from 'react-bootstrap';
// import { useCart } from 'react-use-cart';
// import {useEffect, useState} from 'react';
// import axios from 'axios';
// import deleteItem from 'react';
// import { Link } from 'react-router-dom';

// export default function Cart() {
     
//     const deleteItem =  (id) => {
        
//         axios.delete(`https://fakestoreapi.com/products'${id}`)  
//         .then(res => {  
//           console.log(res);  
//           console.log(res.data);  
//       })
//     }
//     const {
//         isEmpty,
//         items,
//         cartTotal,
//         updateItemQuantity, 
//         emptyCart,
//     } = useCart();
   
//  return (
//    <div  img src="shop.jpg">
//  <Container  className="py-4 mt-5">
//             <h1 className={`my-5 text-center`}>
//                 {isEmpty? 'Your Cart is Empty' : 'The Cart'}
//             </h1>
//             <Row className="justify-content-center">
//                 <Table responsive="sm" striped bordered hover variant className="mb-5">
//                     <tbody>
//                         {items.map((item, index)=>{
//                             return(
//                                 <tr key={index}>
//                                     <td>
//                                         <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
//                                         justifyContent: 'center', alignItems: 'center' }}>
//                                             <div style={{ padding: '.5rem'}}>
//                                                 <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
//                                             {item.title}
//                                         </h6>
//                                     </td>
//                                     <td>Rs. {item.price}</td>
//                                     <td>Quantity ({item.quantity})</td>
//                                     <td>category<br/>
//                                         {item.category}</td>
//                                     <td>
//                                         <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
//                                         <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
//                                         <Button variant="danger" onClick={()=> deleteItem(item.id)} className="ms-2">Remove Item</Button>
                                    
                                      
//                                     </td>
//                                 </tr>
//                             )
//                         })}
                        
//                     </tbody>
                   
//                 </Table>
               
                  
//                 {!isEmpty &&
//                     <Row 
//                         style={{ position: 'fixed', bottom: 0}}
//                         className={` justify-content-center w-100`}
//                     >
//                         <Col className="py-2">
//                             <h4>Total Price: Rs. {cartTotal}</h4>
//                         </Col>
//                         <Col className="p-0" md={4}>
//                             <Button variant="danger"
//                                 className="m-2"
//                                 onClick={()=> emptyCart()}
//                             >
                                
//                                 Clear Cart
//                             </Button>
//                             <Button variant="danger"
//                                 className="m-2">
//                                  <Link to="/Checkout">Go to Checkout</Link>
//                             </Button>
                            
//                         </Col>
//                     </Row>}       
//             </Row>
            
//             </Container>
            
//    </div>
//  )
// }













