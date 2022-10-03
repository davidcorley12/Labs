import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Movie App</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Content</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/read' element={<Footer></Footer>} exact></Route>
            <Route path='/Create' element={<Header></Header>} exact></Route>
          </Routes>

          <br />
          {/* <Header></Header>
          <Content></Content>
          <Footer /> */}
        </div>

      </Router>
    );
  }
}

export default App;

