import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../App.css"


const Header = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Link to={'/'}>Роллы Кумихо</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>
              Главная
              </Link>
            </Nav.Link>
             <Nav.Link> 
            <Link to={'/'}>
            Избранное
            </Link>
             </Nav.Link>
            <Nav.Link>
              <Link to={'/'}>
              Корзина
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to={'/'}>
              Описание
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
                    Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
  
      
    </div>
  )
}

export default Header