import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;