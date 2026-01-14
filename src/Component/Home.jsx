import React from 'react';
import Product from './Product';
import Navbar from './Navbar';
import Header from './Header';
import FeatureSection from './FeatureSection';
import Footer from './Footer';
import ClientFeedback from './ClientFeedback';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Product></Product>
            <FeatureSection></FeatureSection>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;