import React from 'react';
import Product from './Product';
import Navbar from './Navbar';
import Header from './Header';
import FeatureSection from './FeatureSection';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Product></Product>
            <FeatureSection></FeatureSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;