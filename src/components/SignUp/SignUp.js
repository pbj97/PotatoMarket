import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ReginList from './RegionList';
import Profile from './Profile';
import classes from './SignUp.module.css';

const SignUp = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmit(true);
  };
  return (
    <React.Fragment>
      {!isSubmit && (
        <Card className={classes.signUp}>
          <form onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                placeholder="내 동네 이름(동,읍,면)으로 검색"
              />
            </div>
            <Button className={classes.currentLocation}>
              현재 위치로 찾기
            </Button>
            <ReginList
              className={classes.regionList}
              onSubmit={submitHandler}
            />
          </form>
        </Card>
      )}
      {isSubmit && <Profile />}
    </React.Fragment>
  );
};

export default SignUp;
