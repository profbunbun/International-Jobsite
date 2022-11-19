import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreatePost from './components/jobPosts/create-post.component'
import EditPost from './components/jobPosts/edit-post.component'
import PostList from './components/jobPosts/post-list.component'
import CreateProfile from './components/profiles/create-profile.component'
import ProfileList from './components/profiles/profile-list.component'
import Login from './components/login/login.component'
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
                <Link to={'/create-profile'} className="nav-link">
                  HOMEBASE
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
              <Nav>
                  <Link to={'/create-profile'} className="nav-link">
                    Create Profile
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-post'} className="nav-link">
                    Create Job Post
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/login'} className="nav-link">NavBar
                    Login
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/post-list'} className="nav-link">
                    Job List
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/profile-list'} className="nav-link">
                    Profile List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateProfile {...props} />}
                  />
                  <Route
                    exact
                    path="/create-profile"
                    component={(props) => <CreateProfile {...props} />}
                  />
                   <Route
                    exact
                    path="/create-post"
                    component={(props) => <CreatePost {...props} />}
                  />
                  <Route
                    exact
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                   <Route
                    exact
                    path="/post-list"
                    component={(props) => <PostList {...props} />}
                  />
                  <Route
                    exact
                    path="/profile-list"
                    component={(props) => <ProfileList {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-post/:id"
                    component={(props) => <EditPost {...props} />}
                  />
               
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}
export default App