import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ListContainer, SliderWrapper, Items } from '../components';
import { ListItem } from '.';

function List() {
  const items = Array(20).fill(0);

  return (
    <ListContainer>
      <h3>Continue to watch</h3>
      <SliderWrapper>
        <IoIosArrowBack />
        <Items>
          {items.map((item, index) => (
            <ListItem key={index} />
          ))}
        </Items>
        <IoIosArrowForward />
      </SliderWrapper>
    </ListContainer>
  )
}

export default List;