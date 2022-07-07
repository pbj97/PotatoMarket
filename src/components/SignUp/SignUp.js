import React, { useState } from 'react';

import RegionInput from './RegionInput';
import Profile from './Profile';

const SignUp = (props) => {
  const [enteredRegion, setEnteredRegion] = useState();
  const [enteredProfile, setEnteredProfile] = useState();

  const regionInputHandler = (regionInput) => {
    setEnteredRegion(regionInput);
  };

  const profileInputHandler = (profileInput) => {
    setEnteredProfile({ ...profileInput });
    props.onLogin();
  };

  return (
    <React.Fragment>
      {!enteredRegion && <RegionInput onRegionInput={regionInputHandler} />}
      {enteredRegion && !enteredProfile && (
        <Profile onProfileInput={profileInputHandler} />
      )}
    </React.Fragment>
  );
};

export default SignUp;
