import React from 'react'
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            img: fluoride,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            name: 'cavity Filling',
            img: cavity,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            name: 'Teeth whitening',
            img: whitening,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ];
    return (
        <div className="mt-16">
            <div className="text-center">
                <h3 className="text-xl text-primary font-bold">OUR SERVICES</h3>
                <h2 className="text-4xl ">Services We Provide</h2>
            </div>
            <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <Service
                        key={service.id} service={service}
                    ></Service>)
                }
            </div>
        </div>
    )
}

export default Services;