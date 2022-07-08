import React, { useState, useRef, useEffect } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Profile.module.css';

const Profile = (props) => {
  const profileImgInput = useRef(null);

  const [fileImg, setFileImg] = useState();
  const [enteredNickname, setEnteredNickName] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const profileClickHandler = (event) => {
    event.preventDefault();
    profileImgInput.current.click();
  };

  const saveFileImage = (event) => {
    setFileImg(URL.createObjectURL(event.target.files[0]));
  };

  const profileInputHandler = () => {
    const profile = {
      img: fileImg,
      nickname: enteredNickname,
    };
    props.onProfileInput(profile);
  };

  const nicknameChangeHandler = (event) => {
    setEnteredNickName(event.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        fileImg &&
          enteredNickname.trim().length > 1 &&
          enteredNickname.trim().length < 13
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredNickname, fileImg]);

  return (
    <Card className={classes.profile}>
      <form>
        <h1>프로필을 설정해주세요</h1>
        <span>나를 나타내는 프로필 사진과 닉네임을 설정해주세요.</span>
        <div className={classes.profileImg}>
          {!fileImg && (
            <img
              src="img/profile.png"
              alt="profileImg"
              onClick={profileClickHandler}
            />
          )}
          {fileImg && (
            <img src={fileImg} alt="profileImg" onClick={profileClickHandler} />
          )}
        </div>
        <input
          ref={profileImgInput}
          className={classes.profileInput}
          type="file"
          accept="image/*"
          onChange={saveFileImage}
        />
        <div className={classes.nickname}>
          <h3>닉네임</h3>
        </div>
        <div className={classes.nicknameInput}>
          <Input
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={enteredNickname}
            onChange={nicknameChangeHandler}
          ></Input>
          <br></br>
          {!fileImg && <span>프로필 사진을 업로드하세요.</span>}
          {fileImg && !formIsValid && (
            <span>2글자 이상 12글자 이하 닉네임을 입력하세요.</span>
          )}
        </div>

        <Button onClick={profileInputHandler} disabled={!formIsValid}>
          완료
        </Button>
      </form>
    </Card>
  );
};

export default Profile;
