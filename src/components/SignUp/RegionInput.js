import React, { useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ReginList from './RegionList';

import classes from './RegionInput.module.css';

import axios from 'axios';

const RegionInput = (props) => {
  const [address, setAddress] = useState('');

  const REST_API_KEY = '2ef5ed6af24b69df18f27e2e65f9b9ba';

  const combineAddress = (시도, 구, 동) => {
    return 시도 + ' ' + 구 + ' ' + 동;
  };

  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
        {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
        }
      )
      .then((res) => {
        setAddress(
          combineAddress(
            res.data.documents[0].address.region_1depth_name,
            res.data.documents[0].address.region_2depth_name,
            res.data.documents[0].address.region_3depth_name
          )
        );
      })
      .catch((e) => console.log(e));
  }

  function onGeoError() {
    alert('위치권한을 확인해주세요');
  }

  const regionInput = useRef();

  const submitHandler = (event) => {
    props.onRegionInput(event.target.innerText);
  };

  const getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  };
  return (
    <Card className={classes.signUp}>
      <div>
        <Input
          ref={regionInput}
          type="text"
          placeholder="내 동네 이름(동,읍,면)으로 검색"
          value={address}
        />
      </div>
      <Button className={classes.currentLocation} onClick={getLocationHandler}>
        현재 위치로 찾기
      </Button>
      <ReginList className={classes.regionList} onClick={submitHandler} />
    </Card>
  );
};

export default RegionInput;
