import React from 'react';
import Img from "../images/hero_1.png.webp";
function Home() {
  return (
   <div className="main_home">
    <div className="home_contant aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="800">
      <h3>Welcome to our site</h3>
      <h1>Expert SEO, SEM Services in London</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
        texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large languageocean.</p>
      <button className="btn btn1">How We Word</button>
      <button className="btn btn2">Contact us</button>
    </div>
    <div className="home_img aos-init aos-animate" data-aos="zoom-in-left" data-aos-duration="800">
      <img src={Img} alt="Home Image"/>
    </div>
  </div>
  )
}

export default Home