import React from 'react';
import Product from './Product';
import Navbar from './Navbar';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Product></Product>
        </div>
    );
};

export default Home;