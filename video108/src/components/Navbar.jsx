import React, {useEffect} from 'react';

const Navbar = ({ color }) => {
  
    // Case 1: Run on every Render
  useEffect(() => {
    alert("Hey I will run on every render");
  })

  // Case 2: Run only on first Render
  useEffect(() => {
    alert("Hey Welcome to the page, this is the First render");
  }, []);

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running becuase color was changed");
  }, [color]);
  
  // Example of Cleanup Function
   useEffect(()=>{
    alert("Hey welcome to my page. This is the first render of App.jsx")
    return ()=>{
      alert("Component was unmounted")
    }
    
  },[])
  
  return (
    <div>
      I am navbar of {color} color hehe
    </div>
  );
};

export default Navbar;
