import React from 'react';
import doctor from '../../images/doctor.png'
import appointment from '../../images/appointmentbg.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
         style={{background: `url(${appointment})`}}
         className="flex justify-center items-center">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 px-5">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl py-5">Make an Appointment Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit nemo corporis aliquam beatae repudiandae, fugiat expedita doloremque harum autem!</p>
                <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;