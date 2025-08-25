import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SpecialDish from './SpecialDish'
import specialDishes from '@/utils/specialDishes'

function SpecialDishes() {
  return (
    <section className='w-full bg-white' id='home'>
      <div className='w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6 bg-brandGrey rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.06)]'>
      <Swiper
        key='home-swiper'
        className='w-full'
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        pagination={{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }}
        loop={true}
        wrapperClass='swiper-wrapper'
      >
        {specialDishes.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SpecialDish {...item} />
            </SwiperSlide>
          )
        })}
        <div className='swiper-pagination' />
      </Swiper>
      </div>
    </section>
  )
}

export default SpecialDishes
