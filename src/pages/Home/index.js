import React from 'react';
const Home = props => {
  // console.log(props);
  const {
    history,
    location: { query },
  } = props;
  console.log(query);
  return <div>{JSON.stringify(query)}</div>;
};

export default Home;
