import React,{useState} from 'react';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import SubtitleNumber from '../../components/SubtitleNumber';
import Description from '../../components/Description';
import data from '../../data';

  import './Technology.css';
  
  const Technology = () => {
      const techData = data.technology;
      const [value, setValue] = useState(0);

      const {name, images , description} = techData[value];

      return (
          <section className="technology min-h-screen flex flex-col lg:flex-row lg:justify-end">
                <div className="my-10 lg:w-11/12">
                    <SubTitle>
                        <SubtitleNumber>03</SubtitleNumber>space launch 101
                    </SubTitle>

                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        
                        <picture className="lg:order-1 lg:w-2/5">
                            <source media="(min-width: 992px)" srcset={images.portrait} />
                            <img src={images.landscape} alt={name} />
                        </picture>
                        

                        <article className="flex flex-col lg:flex-row items-center w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
                            <ul className="flex flex-row lg:flex-col justify-center lg:justify-start my-6 lg:mr-10">
                                {techData.map((item,index)=>{
                                    return <li key={index}
                                    onClick={()=> setValue(index)}
                                    className={`w-9 h-9 lg:w-14 lg:h-14 mx-2 lg:mx-0 lg:mr-12 lg:my-4 lg:text-2xl rounded-full flex items-center justify-center
                                     border border-solid cursor-pointer hover:border-gray-400
                                    ${index === value ? "border-white bg-white text-gray-900" : "border-gray-600 bg-transparent text-white"}`
                                    }>
                                        <p>{index+1}</p>
                                    </li>
                                })}
                            </ul>
                            <div className="text-center lg:text-left">
                                <Title>
                                    <p className="font-subTitle text-gray-400 spacing mb-3">THE TERMINOLOGY...</p>
                                    <h2 className="text-xl md:text-2xl lg:text-5xl">
                                        {name}
                                    </h2>
                                </Title>
                    
                            <Description>{description}</Description>
                            </div>
                        </article>

                    </div>
              
                </div>
              
          </section>
      )
  }

  export default Technology;
  