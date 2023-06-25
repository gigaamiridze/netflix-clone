import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IFeaturedProps } from '../interfaces';
import { categories } from '../data';
import { FeaturedContainer, Category, CoverImg, Info, PlayButton, InfoButton } from '../components';

function Featured({ type }: IFeaturedProps) {
  return (
    <FeaturedContainer>
      {type && (
        <Category>
          <h3>{type === 'movie' ? 'Movies' : 'Series'}</h3>
          <select name='genre' id='genre'>
            {categories.map((category, index) => {
              const { value, title } = category;

              return (
                <option key={index} value={value}>{title}</option>
              )
            })}
          </select>
        </Category>
      )}
      <CoverImg src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='Cover' />
      <Info>
        <img src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1' alt='Logo' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </p>
        <div>
          <PlayButton>
            <BsPlayFill />
            <span>Play</span>
          </PlayButton>
          <InfoButton>
            <AiOutlineInfoCircle />
            <span>Info</span>
          </InfoButton>
        </div>
      </Info>
    </FeaturedContainer>
  )
}

export default Featured;