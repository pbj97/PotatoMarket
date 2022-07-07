import React, { useState, useRef } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Profile.module.css';

const Profile = (props) => {
  const profileImgInput = useRef(null);
  const nickNameInput = useRef(null);

  const [fileImg, setFileImg] = useState();

  const profileClickHandler = (event) => {
    event.preventDefault();
    profileImgInput.current.click();
  };

  const saveFileImage = (event) => {
    setFileImg(URL.createObjectURL(event.target.files[0]));
  };

  const profileInputHandler = () => {
    if (!fileImg) {
      alert('사진을 업로드하세요');
      return;
    }
    if (!nickNameInput.current.value) {
      alert('닉네임을 입력하세요');
      return;
    }
    const profile = {
      img: fileImg,
      nickName: nickNameInput.current.value,
    };
    props.onProfileInput(profile);
  };

  return (
    <Card className={classes.profile}>
      <h1>프로필을 설정해주세요</h1>
      <span>
        나를 나타내는 프로필 사진과 닉네임으로 등록하면 이웃을이 안심할 수
        있어요.
      </span>
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
      <div className={classes.nickName}>
        <h3>닉네임</h3>
      </div>
      <div>
        <Input
          ref={nickNameInput}
          type="text"
          placeholder="닉네임을 입력해주세요."
        ></Input>
      </div>

      <Button onClick={profileInputHandler}>완료</Button>
    </Card>
  );
};

export default Profile;
