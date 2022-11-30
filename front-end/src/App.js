import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Login /> } />
      {/* <Route
        path="/post"
        element={
          <PostProvider>
            <Post />
          </PostProvider>
        }
      /> */}
    </BrowserRouter>
  );
}

export default App;
