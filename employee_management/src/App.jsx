import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ParentComponent from "./Components/ParentComponent";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div hidden={!showForm}>
        <Header setShowForm={setShowForm} />
        <ParentComponent />
      </div>
      <div hidden={showForm}>
        <Form setShowForm={setShowForm}/>
      </div>
    </>
  );
}

export default App;
