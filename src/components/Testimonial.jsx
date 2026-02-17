import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules"

const testimonials = [
  {
    name: "Emily Chen",
    position: "Startup Founder",
    quote:
      "Alexandre's full-stack development skills transformed our startup's online presence. The seamless integration of front-end and back-end technologies resulted in a robust, user-friendly platform that has significantly boosted our user engagement.",
    image: "/images/img/Emily.jpg",
  },
  {
    name: "Michael Rodriguez",
    position: "E-commerce Manager",
    quote:
      "The custom e-commerce solution Alexandre developed for us has revolutionized our online sales. The intuitive UI and robust backend have streamlined our operations and significantly improved our conversion rates.",
    image: "/images/img/Michael.jpg",
  },
  {
    name: "Sarah Thompson",
    position: "Non-profit Director",
    quote:
      "Alexandre's web development expertise was crucial in creating our organization's new website. The responsive design and efficient content management system have made it much easier for us to reach our audience and manage our online presence.",
    image: "/images/img/Sarah.png",
  },
  {
    name: "Daniel Lee",
    position: "Tech Entrepreneur",
    quote:
      "Working with Alexandre on our web app was a game-changer. His expertise in both frontend and backend technologies resulted in a sleek, high-performance application that our users love. His attention to detail and problem-solving skills are truly impressive.",
    image: "/images/img/Daniel.png",
  },
]

const TestimonialCard = ({ item }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur dark:border-surface-border/60 dark:bg-surface/90 dark:shadow-inner-glow">
      {/* Quote */}
      <blockquote className="flex-1">
        <p className="font-body text-lg leading-relaxed text-slate-700 dark:text-ink-muted">
          "{item.quote}"
        </p>
      </blockquote>

      {/* Author */}
      <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-6 dark:border-surface-border">
        <img
          className="h-14 w-14 rounded-full object-cover ring-2 ring-slate-100 dark:ring-surface-border"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col">
          <div className="font-heading text-lg font-semibold text-slate-900 dark:text-ink">
            {item.name}
          </div>
          <div className="text-sm text-slate-500 dark:text-ink-muted">
            {item.position}
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <section id="testimonial" className="section-shell">
      <div className="section-header">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          What my clients say about working with me
        </p>
      </div>

      <div className="mt-12">
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
