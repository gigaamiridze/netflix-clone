import { NetflixLogo } from '../assets';
import { NavbarContainer, LeftContent, RightContent, Logo, Nav } from '../components';

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
      <RightContent></RightContent>
    </NavbarContainer>
  )
}

export default Navbar;