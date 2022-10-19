import React from 'react';
import {
  AiOutlineBell,
  AiOutlineVideoCameraAdd,
  AiOutlineDollarCircle,
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineClockCircle,
  AiOutlineLike,
  AiOutlineSearch,
  AiOutlineMenu,
} from 'react-icons/ai';
import { GrApps } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { SiYoutubestudio } from 'react-icons/si';
import {
  MdOutlineSwitchAccount,
  MdOutlineDarkMode,
  MdOutlineKeyboardAlt,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
} from 'react-icons/md';
import { GiExitDoor } from 'react-icons/gi';
import { IoLanguage, IoEarth } from 'react-icons/io5';
import { RiShieldUserLine, RiVideoLine } from 'react-icons/ri';
import { FiHelpCircle } from 'react-icons/fi';
import { BiCommentError } from 'react-icons/bi';

import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg' className='bignav'>
      <Container fluid>
        <div className='yt-menu'>
          <Navbar.Brand href='#'>
            <AiOutlineMenu />
            <img
              style={{ width: '110px', marginLeft: '20px' }}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png'
              alt='Youtube'
            />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Form className='searchbar'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>
              {' '}
              <AiOutlineSearch />{' '}
            </Button>
          </Form>
          <div className='triplebutton'>
            <Nav.Link href='#action1'>
              <AiOutlineVideoCameraAdd
                style={{ width: '25px', height: '25px' }}
                className='tripleicons'
              />
            </Nav.Link>
            <Nav.Link href='#action2'>
              <AiOutlineBell
                style={{ width: '25px', height: '25px' }}
                className='tripleicons'
              />
            </Nav.Link>
            <Nav.Link href='#action2'>
              <CgProfile
                style={{ width: '25px', height: '25px' }}
                className='tripleicons'
              />
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
