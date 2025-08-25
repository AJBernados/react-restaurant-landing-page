import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Review from './Review'
import reviewList from '@/utils/reviewList'

function Reviews() {
  return (
    <section className='w-full' id='reviews'>
      <h3 className='sub-heading'>customer&apos;s review</h3>
      <h1 className='heading'>what they say</h1>
      <div className='w-full'>
        <Swiper
          key="swiper-review"
          className='w-full'
          modules={[Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          wrapperClass='swiper-wrapper'
        >
          {reviewList.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <Review {...review} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews
