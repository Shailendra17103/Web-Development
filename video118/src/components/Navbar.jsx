import React, { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is rendered")

  return (
    <div>
      I am a {adjective} Navbar
      <br />
      <button onClick={() => alert(getAdjective())}>
        Get Adjective
      </button>
    </div>
  )
}

export default memo(Navbar)
