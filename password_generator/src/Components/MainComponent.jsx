import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from '@mui/material/Slider';


const MainComponent = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [pass,setPass] = useState()
  const [text, setText] = useState('');
  const [value,setValue] = useState(6)

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };

  const handleCopy = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(pass); 
      alert('Password copied');
    } else {
      document.execCommand('copy', true, pass); 
    }
  };

  const valuetext=(passValue) => {
    setValue(passValue)
    return passValue;
  }
  useEffect(()=>{
    function generatePassword(length,checked,checked2) {
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const specialChars = '!@#$%^&*()';

      if(checked){
        characters+=numbers
      }
      if(checked2){
        characters+=specialChars
      }
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
        setPass(password)
      }
      return password;
    }
    
    // Usage:
    generatePassword(value,checked,checked2);
  },[value])

  return pass?(
    
      <>
        <div className="heading"><h1>Password Generator</h1></div>
        <div className="maindiv">
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            value={pass}
            onChange={handleInputChange}
            InputProps={{
              readOnly: true,
            }}
            sx={{ width: 600, height: 100 }}
          />
          <Button variant="contained" sx={{ margin: 1 }} onClick={handleCopy}>
            Copy
          </Button>
        </div>
        <div>
          <Slider
            aria-label="Temperature"
            defaultValue={6}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={2}
            step={2}
            marks
            min={6}
            max={18}
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Number Allowed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked2}
                onChange={handleChange2}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Special character allowed"
          />
        </div>
      </>
  ):(
    <p>Loading...</p>
  )
  
};

export default MainComponent;
