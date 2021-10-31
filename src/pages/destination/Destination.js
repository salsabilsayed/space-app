import React, { useState } from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import SubtitleNumber from '../../components/SubtitleNumber';
import Description from '../../components/Description';
import data from '../../data';

import "./Destination.css";

const Destination = () => {
    const destinations = data.destinations;
    const [value,setValue] = useState(0);

    const {name,image, description, distance, travel} = destinations[value];

    return (
        <section className="min-h-screen destination flex justify-center items-center">
            <Container>
                <div className="my-16">
                <SubTitle>
                    <SubtitleNumber>01</SubtitleNumber>PICK YOUR DESTINATION
                </SubTitle>

                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between text-white md:w-8/12 mx-auto lg:w-full lg:px-20">
                    <div className="lg:w-2/5">
                        <img src={image} className="w-2/3 mx-auto md:w-1/2 lg:w-full mb-6 lg:mb-0"/>
                    </div>
                    <article className="lg:w-1/2">
                        <ul className="flex justify-center lg:justify-start">
                            {destinations.map((item,index)=>{
                                return <div key={index} className="relative">
                                    <li 
                                
                                onClick={()=> setValue(index)}
                                className={`uppercase mx-3 lg:mx-0 lg:mr-4 my-3 font-subTitle cursor-pointer spacing hoverEffect
                                ${index === value ? "active text-white" : "text-gray-400"}`}
                                >
                                    {item.name}
                                </li>
                                </div>
                            })}
                        </ul>

                        <Title>
                            <h2 className="text-6xl mt-4">
                                {name}
                            </h2>
                        </Title>

                        <Description>{description}</Description>

                        <div  className="brdr"></div>

                        <div className="flex flex-col md:flex-row md:justify-around lg:justify-start mt-6">
                            <div className="mb-5 lg:mr-8">
                                <h4 className="font-subTitle spacing mb-2">AVR. DISTANCE</h4>
                                <p className="text-2xl font-bellefair uppercase">{distance}</p>
                            </div>
                            <div>
                                <h4 className="font-subTitle spacing mb-2">EST. TRAVEL TIME</h4>
                                <p className="text-2xl font-bellefair uppercase">{travel}</p>
                            </div>
                        </div>

                    </article>
                </div>
                </div>
            </Container>
            
        </section>
    )
}

export default Destination;
