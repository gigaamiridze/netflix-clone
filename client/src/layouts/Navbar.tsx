import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useScrollPosition } from '../hooks';
import { Logo } from '.';
import { 
  NavbarContainer, LeftContent, RightContent, 
  Nav, ProfileImg, MenuWrapper, Options 
} from '../components';

function Navbar() {
  const { isScrolled } = useScrollPosition();

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <LeftContent>
        <Logo isNavbarContent={true} />
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
        <ProfileImg src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='profile' />
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