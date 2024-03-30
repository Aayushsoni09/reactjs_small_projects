import React from 'react'

const Header = ({setShowForm}) => {
  return (
    <>
    <div>Header</div>
    <button onClick={()=>{setShowForm(true)}}>Add Employee</button>
    </>
    
  )
}

export default Header