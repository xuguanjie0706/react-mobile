import React from 'react';
const Home = props => {
  console.log(props);
  const {
    history,
    location: { query },
  } = props;
  console.log(query);
  return (
    <div>
      {JSON.stringify(query)}1233{window.location.href}
    </div>
  );
};

export default Home;
