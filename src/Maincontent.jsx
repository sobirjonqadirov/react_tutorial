import React from "react";
import ReactTyped from 'react-typed';

export default function MainBody() {
    return (
      <div className='main-content'>
        <h1>Welcome to React framework</h1>
        <span><ReactTyped strings={["Was first released in 2013;",
            "Was originally created by Jordan Walke;",
            "Has well over 100K stars on GitHub;",
            "Is maintained by Facebook;",
            "Powers thousands of enterprise apps;"]}
            typeSpeed={50}
            loop={true}
            backSpeed={20}
            cursorChar='|'
            showCursor={true}/></span>
      </div>
    )
  }