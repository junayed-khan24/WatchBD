import React from 'react';
import Product from './Product';
import Navbar from './Navbar';
import Header from './Header';
import FeatureSection from './FeatureSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Product></Product>
            <FeatureSection></FeatureSection>
        </div>
    );
};

export default Home;