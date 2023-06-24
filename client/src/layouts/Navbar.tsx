import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NetflixLogo } from '../assets';
import { 
  NavbarContainer, LeftContent, RightContent, 
  Logo, Nav, ProfileImg, MenuWrapper, Options 
} from '../components';

function Navbar() {
  return (
    <NavbarContainer>
      <LeftContent>
        <Logo src={NetflixLogo} alt='Netflix' />
        <Nav>
          <ul>
            <li>
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
            </li>
          </ul>
        </Nav>
      </LeftContent>
      <RightContent>
        <AiOutlineSearch />
        <span>KID</span>
        <IoMdNotifications />
        <ProfileImg src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='Profile' />
        <MenuWrapper>
          <MdOutlineKeyboardArrowDown />
          <Options>
            <span>Settings</span>
            <span>Log out</span>
          </Options>
        </MenuWrapper>
      </RightContent>
    </NavbarContainer>
  )
}

export default Navbar;