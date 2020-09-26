import React from 'react';
const Home = props => {
  // console.log(props);
  const {
    history,
    location: { query },
  } = props;
  console.log(query);
  return <div></div>;
};

export default Home;
