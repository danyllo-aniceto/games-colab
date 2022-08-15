import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ReactNode } from 'react'
import { Navigation, Pagination, A11y } from 'swiper'
import './Slider.css'

interface SliderProps {
  settings: SwiperProps
  children: ReactNode
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  )
}
