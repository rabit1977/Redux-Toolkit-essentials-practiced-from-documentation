import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { PostList } from './features/posts/PostList'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <AddPostForm />
                <PostList />
              </React.Fragment>
            }
          ></Route>
          <Route render={() => <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
