import React from 'react'
import withLoader from './withLoader';
import User from './User';


const UserWithLoader = withLoader(User);


function HighOrderComp() {
  return (
    <div>
      <UserWithLoader username="JohnDoe" email="john@example.com" age={30} />
    </div>
  )
}

export default HighOrderComp