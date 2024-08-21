import React from 'react';
import Input from '../common/input';
import './index.scss';
import Button from '../common/button';

const AddNewSpendings = () => {
  //   const [userName, setUserName] = useState('');

  return (
    <>
      <label>Add New Spendings</label>
      <p>
        <Input type="text" placeholder="Enter New Spendings" />
      </p>
      <Button text="Add" btnColor="blue" btnSize="mid" />
    </>
  );
};

export default AddNewSpendings;
