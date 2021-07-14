import React from 'react';
//import components
import Tweet from './Tweet.js';

const Tweets = (props) => {
    const tweets = [{name: 'kate', tweet:'learning about react now'}, 
    {name: 'dev ed', tweet: 'teaching react'}, 
    {name: 'maxine', tweet: 'i need popcorn'}
  ];

return (
    <section>
        <h1>I have {tweets.length} tweets</h1>
       {tweets.map((tweet) => (
           <Tweet name={tweet.name} tweet={tweet.tweet}/>
       ))}
    </section>
);
};

export default Tweets;