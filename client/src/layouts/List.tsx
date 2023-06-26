import { ListContainer, SliderWrapper } from '../components';
import { ListItem } from '.';

function List() {
  const items = Array(20).fill(0);

  return (
    <ListContainer>
      <h3>Continue to watch</h3>
      <div>
        <SliderWrapper>
          {items.map((item, index) => (
            <ListItem key={index} />
          ))}
        </SliderWrapper>
      </div>
    </ListContainer>
  )
}

export default List;