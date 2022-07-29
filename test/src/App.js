import "./App.css";
import List from "./components/display.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [form, setForm] = useState({ firstName: "", lastName: "", id: "" });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = form;
    if (firstName === "" || lastName === "") {
      return;
    } else {
      form.id = uuidv4();
      setList([...list, form]);
    }
    
    setForm({
      firstName: "",
      lastName: "",
    });
  };

  const deleteItem = (id) => {
    const filteredList = list.filter((item) => {
      return item.id !== id;
    });
    setList(filteredList);
  };

 return (
    <div className="App">
      <h1>Assessment 2 </h1>
      <form className="border" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-md">
          Submit
        </button>
      </form>
      <div>
        {" "}
        <List list={list} deleteItem={deleteItem} />
      </div>
      <div style={{ display: list.length > 0 ? "block" : "none" }}>
      <button
     className="btn btn-danger btn-md "
     onClick={() => setList([])}
   >
     REMOVE ALL
   </button>
      </div>
      
    </div>
  );
}

export default App;
