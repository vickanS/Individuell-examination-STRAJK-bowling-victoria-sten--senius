import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Booking from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import LoadingScreen from './pages/LoadingScreen';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen onExit={() => setIsLoading(false)} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Menu />
                  <Booking />
                </>
              }
            />
            <Route
              path="/confirmation"
              element={
                <>
                  <Menu />
                  <ConfirmationPage />
                </>
              }
            />
            <Route
              path="/loading"
              element={
                <LoadingScreen onExit={() => setIsLoading(false)} />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
