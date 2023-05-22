import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import "./FormValidations.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const FormValidations = () => {

  const history = useHistory();

  const inputArr = [
    {
      type: 'text',
      id: 1,
      value: '',
    },
  ];

  const [arr, setArr] = useState(inputArr);
  const [user, setUser] = useState({
    name: "shilpa",
    email: "123@gmail.com"
  })

  const addInput = () => {
    if(arr.length === 0) {
      setArr(inputArr)
    }
    else {
      setArr((s) => {
        const lastId = s[s.length - 1].id;
        return [
          ...s,
          {
            type: 'text',
            value: '',
          },
        ];
      });
    }
  
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      console.log("newArr", newArr)
      return newArr;
    })
  };

  const deleteInput = (id) => {
    console.log("delete", id)
    const filterFields = arr.filter((item, i) => i !== id)
    console.log("filterFields", filterFields)
    setArr(filterFields)
    
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

const handleEdit = (e) => {
  e.preventDefault()
  history.push({
    pathname: "/EditUser",
    state: user
  })
  window.location.reload();
}
  return (
    <div className="main-div">
   {/* Header */}
<div class="header">
  <h1>My Website</h1>
  <p>With a <b>flexible</b> layout.</p>
  <span>Form validation, flex design, dynamic input fields addition & delete</span>
</div>
{/* Navigation Bar */}
<div className="navbar">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
</div>

      <form onSubmit={handleSubmit(onSubmitHandler)} className="center-div">
        <h2 className="form-title">Lets sign you in.</h2>
        <br />

        <input
          {...register("email")}
          placeholder="email"
          type="email"
          required
          className="input"
        />
        <p>{errors.email?.message}</p>
        <br />

        <input
          {...register("password")}
          placeholder="password"
          type="password"
          required
          className="input"
        />
        <p>{errors.password?.message}</p>
        <br />
        <div className="form-group-buttons">
            <button type="button" onClick={() => reset()} className="btn-reset">
              Reset
            </button>
            <button type="submit" className="submit-button">Sign in</button>
          </div>
        
      </form>
      {/* flex cards */}
      <h1 className="card-title">Responsive Cards with flexbox flex-wrap</h1>
<section className="main-section">
  <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div>
</section> 
{/* add dynamic input fields */}
<h1 className="card-title">Dynamic input fields</h1>
<div className="center-div">

        <h3 className="add-text">Add field</h3>{" "}
        <button className="add-button" onClick={addInput} tooltip="add">
        <h1 className="icon">+</h1>
        </button>
        
      {arr.map((item, i) => {
        return (
          <div style={{display: "flex"}}>
          <input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            style={{width: "400px", display: "block"}}
          />
           <button className="delete-button" onClick={(e)=>deleteInput(i)} tooltip="delete">
            <h1 className="icon">-</h1>
            </button>
          </div>
        );
      })}
  
    </div>
    {/* Edit form */}
    <h1 className="card-title">Edit</h1>
    <form onSubmit={handleEdit} className="center-div">
        <h2 className="form-title">Edit user</h2>
        <br />

        <input
        readOnly
          type="text"
          required
          className="input"
          value={user.name}
        />
        <br/><br/>
        <input
        readOnly
          type="email"
          required
          className="input"
          value={user.email}
        />
        <br />
        <div className="form-group-buttons">
            <button type="submit" className="submit-button">Edit</button>
          </div>
      </form>

</div>

  );
};

export default FormValidations;
