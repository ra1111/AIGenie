

import Home from './screens/home/index';
import ErrorPage  from './screens/error';
import React from "react";
import PrivacyPolicy from './screens/privacy';

import {
  BrowserRouter,
  Routes,
  Link,
  Route
} from "react-router-dom";
import TermsOfService from './screens/terms';
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link  className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link  className="link" to="/terms">Terms and Conditions</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsOfService/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
