"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { tweets } from '../data/tweets';
import RecentNews from './RecentNews';

const RecentTweets = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tweetRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    tweetRefs.current = tweetRefs.current.slice(0, tweets.length);

    // Load Twitter widget
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    document.head.appendChild(script);

    // Create and embed tweets
    const createTweet = (ref: HTMLDivElement, tweetUrl: string) => {
      ref.innerHTML = "";
      const tweet = document.createElement("blockquote");
      tweet.setAttribute("class", "twitter-tweet");
      tweet.setAttribute("data-theme", "dark");
      tweet.setAttribute("data-dnt", "true");
      tweet.setAttribute("data-align", "center");
      tweet.setAttribute("data-conversation", "none");
      
      const tweetLink = document.createElement("a");
      tweetLink.setAttribute("href", tweetUrl);
      tweet.appendChild(tweetLink);
      
      ref.appendChild(tweet);
    };

    // Create all tweets
    tweetRefs.current.forEach((ref, index) => {
      if (ref && tweets[index]) {
        createTweet(ref, tweets[index].url);
      }
    });

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-8 pb-24 bg-black px-4 sm:px-16">
      <h2 className="font-freight text-5xl font-bold mb-8">Recent Updates.</h2>
      <RecentNews />
      <div className="max-w-4xl w-full px-4 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6"
          animate={{ height: isExpanded ? "auto" : "400px" }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          {tweets.map((tweet, index) => (
            <div 
              key={tweet.id}
              ref={el => { tweetRefs.current[index] = el; }}
              className="w-full"
            />
          ))}
        </motion.div>
        
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent"
          animate={{ 
            height: isExpanded ? "0px" : "200px",
            opacity: isExpanded ? 0 : 1 
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Expand/Collapse Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-10
                     flex items-center justify-center gap-2 px-4 py-2 
                     text-white hover:text-gray-300 transition-colors"
          animate={{ 
            bottom: isExpanded ? "-40px" : "20px",
          }}
          transition={{ duration: 0.5 }}
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <IoIosArrowUp size={24} />
            </>
          ) : (
            <>
              <span>Show More</span>
              <IoIosArrowDown size={24} />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default RecentTweets;