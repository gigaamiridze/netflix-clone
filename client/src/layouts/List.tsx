import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ListContainer, SliderWrapper, Items } from '../components';
import { ListItem } from '.';

function List() {
  const listRef = useRef<HTMLDivElement>(null);
  const items = Array(20).fill(0);

  const handleClick = (direction: string) => {
    if (listRef.current) {
      const distance = listRef.current.getBoundingClientRect().x - 50;

      if (direction === 'left') {
        listRef.current.style.transform = `translateX(${240 + distance}px)`;
      } else {
        listRef.current.style.transform = `translateX(${-240 + distance}px)`;
      }
    }
  }

  return (
    <ListContainer>
      <h3>Continue to watch</h3>
      <SliderWrapper>
        <IoIosArrowBack onClick={() => handleClick('left')} />
        <Items ref={listRef}>
          {items.map((item, index) => (
            <ListItem key={index} />
          ))}
        </Items>
        <IoIosArrowForward onClick={() => handleClick('right')} />
      </SliderWrapper>
    </ListContainer>
  )
}

export default List;