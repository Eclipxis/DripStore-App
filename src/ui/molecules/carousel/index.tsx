import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styled'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

interface Props {
  images: string[]
}

const Carousel = ({ images }: Props) => {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {images.map((image, index) => (
        <SwiperSlide key={`${image}-${index}`}>
          <S.Image src={image} alt="Peça de roupa" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel