import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Cardsdata from './CardsData';
import './style.css';

const CategoryPage = () => {
  const [data, setData] = useState(Cardsdata);
  const [filteredData, setFilteredData] = useState(Cardsdata);
  const [selectedGenre, setSelectedGenre] = useState('All'); // State for selected genre
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
  };

  useEffect(() => {
    if (selectedGenre === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.genre === selectedGenre);
      setFilteredData(filtered);
    }
  }, [selectedGenre, data]);

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>
      <Form.Group controlId="genreSelect">
        <Form.Label>Select Genre</Form.Label>
        <Form.Control as="select" onChange={handleGenreChange}>
          <option value="All">All</option>
          <option value="Classic">Classic</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Romance">Romance</option>
          <option value="Coming-of-age">Coming-of-age</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Historical">Historical</option>
        </Form.Control>
      </Form.Group>
      <div className="row d-flex justify-content-center align-items-center">
        {filteredData.length > 0 ? (
          filteredData.map((element, id) => (
            <Card
              style={{ width: '18rem', border: 'none', color: 'red' }}
              className="mx-5 mt-4 card_style"
              key={element.id}
            >
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: '16rem' }}
                className='mt-3'
              />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  Price: ₹ {element.price}
                </Card.Text>
                <div className='button_div d-flex justify-content-center'>
                  <Button
                    variant="primary"
                    onClick={() => send(element)}
                    className='col-lg-12'
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No books available for this genre.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
