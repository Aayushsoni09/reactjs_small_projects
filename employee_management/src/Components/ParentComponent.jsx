import React, { useState, useEffect } from "react";
import EmpListCard from "./EmpListCard.jsx";
import Employee_info_card from "./Employee_info_card.jsx";

const ParentComponent = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import("../data.js");
        const data = response.data;
        setEmployees(data);
        console.log(selectedEmployee);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [selectedEmployee,employees]);

  return (
    <div className="emp_list_wrapper">
      <div>
        {employees.length > 0 ? (
          <EmpListCard selectedEmp={setSelectedEmployee} employee={employees} />
        ) : (
          <p>Loading Employees...</p>
        )}
      </div>
      <div>
        {selectedEmployee != null ? (
          <Employee_info_card selectedEmp={selectedEmployee} />
        ) : (
          <p>not selected</p>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
