
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import SearchFilter from 'react-filter-search';
import { Dropdown } from 'react-bootstrap';
import ProductCard from './ProductCard';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';



const Shop = () => {

  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [productData, setProductData] = useState([]);

  
  
  useEffect(() => {

    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",

    })
      .then((res) => {
        console.log(res.data)
        setProductData(res.data)
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

 


  return (
    <Container className="py-4">
      <Row>
      <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center ">
      <InputGroup className="mb-3 " >

            <FormControl
              placeholder="Search products"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
          </Col>
          </Row>
       <div className="btn-group" role="group" aria-label="Basic example"
      
        style={{top:"-70px"}} >
      <button onClick={() => setSearchInput('electronics')}
        type="button"
        value="electronics"
        className="btn btn-secondary">Electronics
        </button>
      <button type="button"  onClick={() => setSearchInput(' mens')} 
      value="mens clothing"
       className="btn btn-secondary">mens
       </button>
      <button type="button"   onClick={() => setSearchInput('womens')} value="womens clothing" className="btn btn-secondary">womens</button>
      <button type="button"   onClick={() => setSearchInput('jewelery')} value="jewelery" className="btn btn-secondary">jewellery</button>
      </div>
      {/* <Row> */}
        {/* <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center "> */}
          {/* <h1 >Search products</h1> */}
          

        {/* </Col> */}

      {/* </Row> */}
       
     
    

      <SearchFilter
        value={searchInput}
        data={productData}
        renderResults={results => (
          <Row className='justify-content-center' >
            {results.map((item, i) => (
              <ProductCard data={item} key={i} />
            ))}
          </Row>
        )}
      />

    </Container>

  );
};
export default Shop
































