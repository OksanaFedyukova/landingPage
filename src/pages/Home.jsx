import React from 'react';
import '../Styles/App.css';

import Header from '../components/Header/Header';
import HomeOrg from '../components/HomeOrg/HomeOrg';
import Footer from '../components/Footer/Footer';
import DiscoverOrg from '../components/DiscoverOrg/DiscoverOrg';
import JoinOrg from '../components/JoinOrg/JoinOrg';


const Home = () => {
  return (
    <>
    <Header />
    <HomeOrg/>
    <DiscoverOrg/>
    <JoinOrg/>
     <Footer/>
    </>
 
  )
};

export default Home;