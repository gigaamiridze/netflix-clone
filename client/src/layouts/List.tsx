import { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ListContainer, SliderWrapper, Items } from '../components';
import { ListItem } from '.';

function List() {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);
  const items = Array(10).fill(0);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (listRef.current) {
      const distance = listRef.current.getBoundingClientRect().x - 50;

      if (direction === 'left' && slideNumber > 0) {
        listRef.current.style.transform = `translateX(${240 + distance}px)`;
        setSlideNumber(slideNumber - 1);
      }
      if (direction === 'right' && slideNumber < 5) {
        listRef.current.style.transform = `translateX(${-240 + distance}px)`;
        setSlideNumber(slideNumber + 1);
      }
    }
  }

  return (
    <ListContainer>
      <h3>Continue to watch</h3>
      <SliderWrapper isMoved={isMoved}>
        <IoIosArrowBack onClick={() => handleClick('left')} />
        <Items ref={listRef}>
          {items.map((item, index) => (
            <ListItem 
              key={index} 
              index={index}
            />
          ))}
        </Items>
        <IoIosArrowForward onClick={() => handleClick('right')} />
      </SliderWrapper>
    </ListContainer>
  )
}

export default List;