import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Gallery from './components/Gallery';
import Professionalism from './components/Professionalism';
import VideoScroll from './components/VideoScroll';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <Introduction />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="expertise">
          <Professionalism />
        </section>
        <section id="video-experience">
          <VideoScroll />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="location">
          <Location />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
