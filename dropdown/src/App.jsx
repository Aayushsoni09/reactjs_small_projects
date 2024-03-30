import { useState } from "react";
const App = () => {
  const [val1, setVal1] = useState([]);
  const handleChange = (e) => {
    console.log(typeof e.target.value);
    setVal1(e.target.value.split(","));
  };
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  return (
    <>
      <select onChange={(e) => handleChange(e)}>
        {countries.map((item, index) => {
          return (
            <option key={index} value={item.cities}>
              {item.name}
            </option>
          );
        })}
      </select>
      {val1.length > 0 ? (
        <select>
          {val1.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default App;
