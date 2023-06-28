import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Rating } from 'react-simple-star-rating'

const ProductCard = (props) => {
    let navigate = useNavigate();

    let { image, price, title, category, id } = props.data;
    const addToCart = () => {
    }

    const routeChange = (currentId) => {

        navigate('/CardDetails', { state: props.data });
    }


    return (

        <Card
            style={{ width: '18rem', height: '27rem' }}>
            <div style={{
                background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'
            }}>
                <div style={{ width: '9rem' }}>
                    <Card.Img variant="top"
                        src={image}
                        onClick={() => routeChange(id)}
                        className="img-fluid" />
                </div>
            </div>
            <Rating name="half-rating" defaultValue={1.5} precision={0.5} />

            <Card.Body>
                {/* <Card.Title >
                    {id}
                </Card.Title> */}
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {id}  {title}
                </Card.Title>
                <Card.Title >
                    {category}
                </Card.Title>

                <Card.Title>
                    Rs. <span className="h3">{price}</span>
                </Card.Title>

                <Button
                    onClick={() => addToCart()}
                    className=" d-flex align-item-center m-auto border-0"
                >
                    {/* <BsCartPlus size="1.8rem" /> */}
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard