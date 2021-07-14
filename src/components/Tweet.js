import React from 'react';

const Tweet = (props) => (
  <div>
      <h1>{props.name}</h1>
      <div>{props.tweet}</div>
  </div>
);

export default Tweet;