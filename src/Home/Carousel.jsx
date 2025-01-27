import React, { useEffect, useState } from 'react';

const BackgroundCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/slide')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setSlides(data))
      .catch((error) => console.error('Error fetching slider data:', error));
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // 5 seconds per slide
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (slides.length === 0) return <p>Loading...</p>;

  return (
    <div className="b-background-carousel">
      {slides.map((slide, index) => (
        <div
          key={slide._id}
          className={`b-carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ><h1 className=' destination-title text-yellow-500 pt-6 text-center text:sm sm:text-base md:text-lg  lg:text-6xl font-bold'>Wedding Entertainment</h1>
        <p className="pt-1 text-center text-gray-200 text-sm sm:text-base sm:pb-2 md:text-lg lg:text-2xl font-bold">
  The Emotion counts as it is related to the Bride and Groom’s childhood Dream and we value it. 
  To make your dream come true into reality, we provide one stop solution for Wedding & Events. 
  We cherish your peace of mind by offering a complete range of wedding services and saving you from being 
  occupied on dealing and wrangling with the individual suppliers. As we are a renowned company and have been 
  organizing weddings on a frequent basis, we get the best rates available in the market from all the vendors 
  which can be benefited by you. So, If you want the best wedding planners in Punjab and event management company 
  in Ludhiana, feel free to contact us anytime.
</p>

        {/* <p className=' pt-10 text-center text-gray-200 text-2xl sm:text-10px font-bold'>The Emotion counts as it is related the Bride and Groom’s childhood Dream and we value it. to make your dream come true into reality we provide one stop solution for Wedding & Events. We cherish your peace of mind by offering a complete range of wedding services and saving you from being occupied on dealing and wrangling with the individual suppliers. As we are a renowned company and have been organizing wedding on a frequent basis, we get the best rates available in the market from all the vendors which can be benefited by you. So If you want best wedding planners in Punjab and event management company in Ludhiana then feel free to contact us anytime.</p> */}
        
          <h1 className="destination-title">{slide.title}</h1>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BackgroundCarousel;
