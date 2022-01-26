import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../src/logo.svg'

function Header () {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top App-logo-nav'
            />{' '}PokeDex
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Pokémons</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
