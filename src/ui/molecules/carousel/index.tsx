import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styled'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { ChangeEvent } from 'react';
import { BiBookAdd, BiTrash } from 'react-icons/bi';

interface Props {
  images: string[]
  created?: boolean
  onAddImages?: (base64s: string[]) => void;
  onRemoveImage?: (index: number) => void;
}

const Carousel = ({ images, created, onAddImages, onRemoveImage }: Props) => {
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
  
  const handleFileChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;
    if (!files || !files.length) return;

    const base64s = await Promise.all(
      Array.from(files).map(file => fileToBase64(file))
    );

    onAddImages?.(base64s);
  }

  const handleRemoveImage = (index: number) => {
    onRemoveImage?.(index);
  }

  const renderAddButton = () => (
    <S.WrapperCarousel htmlFor="carousel-image-upload" style={{ cursor: 'pointer' }}>
      <input
        type="file"
        accept="image/*"
        multiple
        id="carousel-image-upload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
        <BiBookAdd size={100} color="#239cddff" />
        <S.TitleImages>Adicionar imagens</S.TitleImages>
    </S.WrapperCarousel>
  );

  if (created && images.length === 0) {
    return renderAddButton();
  }

  return (
    <Swiper 
      navigation
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '45rem', 
        maxWidth: '50rem',
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 }
      }}  
    >
      {images.map((image, index) => (
        <SwiperSlide 
          key={`${image}-${index}`}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
            <S.Image src={image} alt="Peça de roupa" />
            {created && (
              <S.TrashButton onClick={() => handleRemoveImage(index)}>
                <BiTrash size={30} color="#ffffff" />
              </S.TrashButton>
            )}
          </div>
        </SwiperSlide>
      ))}

      {created && (
        <SwiperSlide 
          key="add-button" 
          style={{ 
            display: 'flex', 
            alignItems: 'center' 
          }}
        >
          {renderAddButton()}
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Carousel