import React from 'react';

import { useSelector } from 'react-redux';

const Signin = () => {
  const users = useSelector((state) => state.Test.users);
  console.log('Users', users);

  return <div>Signin</div>;
};

export default Signin;
