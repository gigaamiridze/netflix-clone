import { useState } from 'react';
import { IListItemProps } from '../interfaces';
import { ItemContainer } from '../components';

function ListItem({index}: IListItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(true);
  const distance = index * 225 - 50 + index * 2.5;

  return (
    <ItemContainer
      style={{ left: isHovered ? distance : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee' alt='Movie' />
    </ItemContainer>
  )
}

export default ListItem;