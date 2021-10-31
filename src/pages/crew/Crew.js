import React, { useState } from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import SubtitleNumber from '../../components/SubtitleNumber';
import Description from '../../components/Description';
import data from '../../data';

import './Crew.css';

const Crew = () => {
    const crew = data.crew;
    const [value ,setValue] = useState(0);
    const [active, setActive] = useState(false)

    const {name, image, role, bio} = crew[value];

    return (
        <section className="py-16 md:pt-22 md:pb-0 crew min-h-screen flex justify-center items-center lg:items-end">
            <Container>
                <SubTitle>
                    <SubtitleNumber>02</SubtitleNumber>meet your crew
                </SubTitle>

                <div className="flex flex-col lg:flex-row lg:items-start md:px-20 lg:px-0">
                    <div className="md:order-2">
                        <img src={image} alt={name} className="w-1/2 mx-auto lg:w-10/12"/>
                        <div className="brdr md:hidden"></div>
                    </div>

                    <article className="flex flex-col lg:w-2/3 lg:my-6">
                        <div className="flex justify-center lg:justify-start md:order-2">
                            {crew.map((item,index)=> {
                                return <div key={index}
                                onClick={()=> setValue(index)}
                                
                                className={`w-3 h-3 ${index === value ?'bg-white': 'bg-gray-600'} hover:bg-gray-400 cursor-pointer mx-2 my-6 lg:my-0 lg:mx-0 lg:mr-5 rounded-full`}>
                                </div>
                            })}
                        </div>
                        <div className="my-12 lg:pr-6">
                            <h3 className="font-bellefair uppercase lg:text-2xl text-gray-400">{role}</h3>

                            <Title>
                                <h2 className="text-2xl my-3 lg:text-5xl">
                                    {name}
                                </h2>
                            </Title>
                            
                            <Description>{bio}</Description>
                        </div>

                    </article>
                </div>
            </Container>
        </section>
    )
}

export default Crew;
