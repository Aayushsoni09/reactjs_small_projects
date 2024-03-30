import React, { useState } from 'react'
import {data} from "../data"
const Form = ({setShowForm}) => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);
    const [age, setAge] = useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({employee_name:name,employee_salary:salary,employee_age:age})
        data.append({
            
        })
        setShowForm(false)
    }
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label>
            Salary:
            <input type="number" value={salary} onChange={e => setSalary(e.target.value)} required />
          </label>
          <label>
            Age:
            <input type="number" value={age} onChange={e => setAge(e.target.value)} required/>
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    };


export default Form