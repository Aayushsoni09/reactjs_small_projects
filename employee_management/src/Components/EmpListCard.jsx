import React from 'react'
import Employee_info_card from './Employee_info_card'

const EmpListCard = (employee) => {
 if(employee.employee){
  console.log(employee);
  return (
    <>
      { 

        employee.employee.map((item,i)=>{ 
          return (
            <div key={i} className='employee_list_card_wrapper'>
            <h5 onClick={()=>{employee.selectedEmp(item)}}>{item.employee_name}</h5> 
            <button>Delete</button>
            </div>
          )
        })
      } 
  </>
  )
 }else{
       <p>Loading..</p>
       return null
    }
  }
  
export default EmpListCard