import React from 'react'

const Employee_info_card = ({selectedEmp}) => {
  console.log(selectedEmp);
  return (
    <div className='employee_list_card_wrapper'>

    <div>Name : {selectedEmp.employee_name}</div>
    <div>Salary: {selectedEmp.employee_salary}</div>
    <div>Age: {selectedEmp.employee_age}</div>

    </div>
    
  )
}

export default Employee_info_card