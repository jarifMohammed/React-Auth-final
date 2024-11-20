
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./App.css"; // Import the updated styles
import { FreeMode, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "This service is amazing! Highly recommended.",
    image: "https://i.ibb.co.com/nMtfz3K/pexels-olly-3756679.jpg",
  },
  {
    name: "Bob Smith",
    feedback: "I had a fantastic experience using this platform.",
    image: "https://i.ibb.co.com/nMtfz3K/pexels-olly-3756679.jpg",
  },
  {
    name: "Charlie Brown",
    feedback: "Exceptional support and user-friendly design.",
    image: "https://i.ibb.co.com/nMtfz3K/pexels-olly-3756679.jpg",
  },
  {
    name: "Diana Ross",
    feedback: "Loved it! Will definitely use again.",
    image: "https://i.ibb.co.com/nMtfz3K/pexels-olly-3756679.jpg",
  },
  {
    name: "Evan Taylor",
    feedback: "Great value for money. Highly satisfied!",
    image: "https://i.ibb.co.com/nMtfz3K/pexels-olly-3756679.jpg",
  },
];

export default function App() {
  return (
    <div className="App">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          // Adjust the number of visible slides for different screen sizes
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={`${testimonial.name}'s avatar`} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
