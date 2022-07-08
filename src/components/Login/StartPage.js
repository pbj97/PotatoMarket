import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import SignUp from '../SignUp/SignUp';
import Login from './Login';
import classes from './StartPage.module.css';

const StartPage = (props) => {
  const [startBtnClicked, setStartBtnClicked] = useState(false);
  const [loginBtnClicked, setLoginBtnClicked] = useState(false);
  const startBtnHandler = () => {
    setStartBtnClicked(true);
  };
  const loginBtnHandler = () => {
    setLoginBtnClicked(true);
  };
  return (
    <React.Fragment>
      {!startBtnClicked && !loginBtnClicked && (
        <Card className={classes.startPage}>
          <img src="img/potato.png" alt="potato" />
          <h1>중고거래는 감자마켓</h1>
          <p>
            회원가입을 하고<br></br>감자마켓을 시작해보세요.
          </p>
          <div>
            <Button onClick={startBtnHandler}>회원가입</Button>
          </div>
          <span>
            이미 계정이 있나요?
            <button onClick={loginBtnHandler} className={classes.login}>
              로그인
            </button>
          </span>
        </Card>
      )}
      {startBtnClicked && <SignUp onLogin={props.onLogin} />}
      {loginBtnClicked && <Login onLogin={props.onLogin} />}
    </React.Fragment>
  );
};

export default StartPage;
