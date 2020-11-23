import React from 'react';
import './Coin.css';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';


const Coin = ({name, price, symbol, image, priceChange}) => {
    return (
        <div className='coin-container'>
            <Card>
                <ListGroup>
                    <ListGroup.Item className='coin'>  <img src={image} alt='crypto' />
                    <div className='coin'>
                        <h1>{name}</h1>
                        <span className='coin-symbol'>{symbol}</span>
                        </div>
                        <div className='coin-data'>     
                        <span className='coin-price'>${price}</span>
                        {/* <span className='coin-price'>C${priceCAD}</span>
                        <span className='coin-price'>€{priceEUR}</span> */}
            
                        <span>{priceChange < 0 ? (
                            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                            ) : (
                            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                        )}</span>
                        </div>
                    </ListGroup.Item>
    
                </ListGroup>
            </Card>
          </div>
    )
}

export default Coin;
