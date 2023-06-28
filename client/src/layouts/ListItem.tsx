import { useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { MdOutlineAdd } from 'react-icons/md';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { IListItemProps } from '../interfaces';
import { ItemContainer, ItemInfo, Icons, Details } from '../components';

function ListItem({ index }: IListItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(true);
  const distance = index * 225 - 50 + index * 2.5;
  const trailer = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <ItemContainer
      style={{ left: isHovered ? distance : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee' alt='Movie' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop />
          <ItemInfo>
            <Icons>
              <BsPlayFill />
              <MdOutlineAdd />
              <AiOutlineLike />
              <AiOutlineDislike />
            </Icons>
            <Details>
              <span>1 hour 14 mins</span>
              <span>+16</span>
              <span>1999</span>
            </Details>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </p>
            <h6>Action</h6>
          </ItemInfo>
        </>
      )}
    </ItemContainer>
  )
}

export default ListItem;