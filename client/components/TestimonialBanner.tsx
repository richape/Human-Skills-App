import { useEffect, useRef } from 'react';

const TestimonialBanner = () => {
 const quotes = [
    "If you want to be a good developer, learn the tech. If you want to be a great developer, learn about people - Joshua Vial - co founder of Dev Academy Aotearoa ~ ",
    "Positive (appreciative) feedback can motivate people to continue doing what they’re doing well, and do it with more vigour, determination, and creativity ~ ",
    "Empathy fuels connection. Sympathy drives disconnection - Brene Brown ~ ",
    "Our successes and failures come and go—they neither define us nor do they determine our worthiness ― Kristin Neff ~"
    // Add more quotes as needed
 ];

 const bannerRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
    const banner = bannerRef.current;
    let scrollPosition = 0;

    const scrollQuotes = () => {
      if (banner) {
        scrollPosition -= 1;
        if (scrollPosition <= -banner.scrollWidth) {
          scrollPosition = 0;
        }
        banner.style.transform = `translateX(${scrollPosition}px)`;
      }
    };

    const scrollInterval = setInterval(scrollQuotes, 50); // Adjust speed as needed

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
 }, []);

 return (
    <div ref={bannerRef} className="py-1 overflow-hidden whitespace-nowrap">
      {quotes.map((quote, index) => (
        <div key={index} className="inline-block px-4">
          <blockquote className="text-white italic">{quote}</blockquote>
        </div>
      ))}
    </div>
 );
};

export default TestimonialBanner;