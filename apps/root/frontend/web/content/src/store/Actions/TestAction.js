export const getAllPosts = () => {
  return (dispatch) => {
    console.log('Execute');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) =>
        //dispatch response to the store
        dispatch({ type: 'DO_THIS', payload: result })
      );
  };
};
