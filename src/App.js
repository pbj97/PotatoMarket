import React, { useState, useEffect } from 'react';

import StartPage from './components/Login/StartPage';
import MainPage from './components/Main/MainPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      {!isLoggedIn && <StartPage onLogin={loginHandler} />}
      {isLoggedIn && (
        <MainPage onLogin={loginHandler} onLogout={logoutHandler} />
      )}
    </React.Fragment>
  );
}

export default App;
