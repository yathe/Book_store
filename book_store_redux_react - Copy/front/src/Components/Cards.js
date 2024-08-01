import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import axios from 'axios';
import Cardsdata from './CardsData'
import './style.css';
const Cards = ()=>{
  const [data,setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const send = (e) =>{
      dispatch(ADD(e))
  }
  console.log(data)
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Projects</h2>
            <div className="row d-flex justify-content-center align-items-center">
                    {data.map((element, id) => {
                        return(
                        <>
                            <Card style={{ width: '18rem', border: "none", color: "red" }} className="mx-5 mt-4 card_style" key={id}>
                                <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className='mt-3' />
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <Card.Text>
                                        Price: ₹ {element.price}
                                    </Card.Text>
                                    <div className='button_div d-flex justify-content-center'>
                                        <Button variant="primary" onClick={() => send(element)} className='col-lg-12'>Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                            </>
                    )})
                        }
            </div>
        </div>
    );
}

export default Cards;
