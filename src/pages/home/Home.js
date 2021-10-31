import React from "react";
import SubTitle from "../../components/SubTitle";
import Container from "../../components/Container";
import Description from "../../components/Description";

import "./Home.css";

const Home = () => {
  return (
    <section className="flex justify-center items-center lg:items-end min-h-screen home">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center my-10">
          <div className="md:w-3/4 lg:w-1/3 mt-12 md:mx-auto lg:mx-0">
            <div className="md:text-center lg:text-left">
              <h3
                className="font-subTitle uppercase text-blueGray 
                    md:text-2xl py-10 md:pt-14 md:mt-10 spacing text-center lg:text-left"
              >
                SO, YOU WANT TO TRAVEL TO
              </h3>
            </div>
            <h1 className="font-bellefair uppercase text-white my-3 text-7xl lg:text-9xl">
              space
            </h1>

            <Description>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </Description>
          </div>

          <div
            className="bg-white explore w-40 h-40 lg:w-52 lg:h-52 mt-14 mb-6 mx-auto lg:mx-0 
                            bg-white flex justify-center items-center rounded-full self-end"
          >
            <button className="text-2xl">EXPLORE</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
