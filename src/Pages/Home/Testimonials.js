import React from 'react';
import qoute from '../../icons/quote.svg';
import patient1 from '../../images/patient1.png'
import patient2 from '../../images/patient2.png'
import patient3 from '../../images/patinet3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: patient1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: patient2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: patient3
        }
    ]
    return (
        <section className="my-28">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonials
                    </h4>
                    <h2 className="text-3xl">
                        What Our Patients Says
                    </h2>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={qoute} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        reviews.map((review) =><Review review={review} key={review._id}></Review>)
                    }
            </div>
        </section>
    );
};

export default Testimonials;