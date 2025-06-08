import React, { useEffect, useRef } from 'react';
import Img from "../images/about_1.png.webp";
import Img1 from "../images/person_1.jpg.webp";
import Img2 from "../images/person_2.jpg.webp";
import Img3 from "../images/person_3.jpg.webp";

function About() {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = wrapper.querySelectorAll("i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX, startScrollLeft;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      clearTimeout(timeoutIdRef.current);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutIdRef.current = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutIdRef.current));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, []);

  return (
    <>
      <div className="main_about">
        <div className="about">
          <div className="about_img">
            <img className="aos-init aos-animate" data-aos="fade-up" src={Img} />
          </div>
          <div className="about_contant aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <h3>About us</h3>
            <h2>Why our agency?</h2>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>Far far away, behind the word mountains...</p>
            <ul>
              <li>&#10004; Behind the word mountains</li>
              <li>&#10004; Bookmarksgrove right at the coast</li>
              <li>&#10004; Semantics, a large language</li>
            </ul>
            <p><a href="#" className="btn btn-primary">About us</a></p>
          </div>
        </div>
      </div>

      <div className="main_slider">
        <div className="wrapper" ref={wrapperRef}>
          <i id="left" className="bi bi-chevron-left"></i>
          <ul className="carousel" ref={carouselRef}>
            <li className="card">
              <div className="img"><img src={Img1} alt="img" draggable="false" /></div>
              <h2>Blanche Pearson</h2>
              <span>Director at Google</span>
            </li>
            <li className="card">
              <div className="img"><img src={Img2} alt="img" draggable="false" /></div>
              <h2>Joenas Brauers</h2>
              <span>Director at Google</span>
            </li>
            <li className="card">
              <div className="img"><img src={Img3} alt="img" draggable="false" /></div>
              <h2>Lariach French</h2>
              <span>Director at Google</span>
            </li>
            <li className="card">
              <div className="img"><img src={Img1} alt="img" draggable="false" /></div>
              <h2>James Khosravi</h2>
              <span>Director at Google</span>
            </li>
            <li className="card">
              <div className="img"><img src={Img2} alt="img" draggable="false" /></div>
              <h2>Kristina Zasiadko</h2>
              <span>Director at Google</span>
            </li>
            <li className="card">
              <div className="img"><img src={Img3} alt="img" draggable="false" /></div>
              <h2>Donald Horton</h2>
              <span>Director at Google</span>
            </li>
          </ul>
          <i id="right" className="bi bi-chevron-right"></i>
        </div>
      </div>

    </>
  );
}

export default About;
