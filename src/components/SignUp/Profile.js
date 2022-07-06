import React from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const Profile = () => {
  return (
    <Card>
      <h1>프로필을 설정해주세요</h1>
      <span>
        나를 나타내는 프로필 사진과 닉네임으로 등록하면 이웃을이 안심할 수
        있어요.
      </span>
      <div>
        <img src="img/potato.png" />
      </div>
      <h3>닉네임</h3>
      <div>
        <input></input>
      </div>

      <Button>완료</Button>
    </Card>
  );
};

export default Profile;
