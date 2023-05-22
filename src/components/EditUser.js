import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import "./FormValidations.css";
import { useEffect } from "react";



const EditUser = (props) => {

const {name, email} = props.location.state;

const schema = yup.object().shape({
    name: yup.string().default(name),
    email: yup.string().email().default(email)
  });

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

 

console.log("name", name);
    return (
        <div className="main-div">
        Edit user
        <form onSubmit={handleSubmit(onSubmitHandler)} className="center-div">
        <h2 className="form-title">Edit user</h2>
        <br />

        <input
          {...register("name")}
          type="text"
          required
          className="input"
        />
        <p>{errors.name?.message}</p>
        <br />

        <input
          {...register("email")}
          placeholder="email"
          type="email"
          required
          className="input"
        />
        <p>{errors.password?.message}</p>
        <br />
        <div className="form-group-buttons">
            <button type="button" onClick={() => reset()} className="btn-reset">
              Reset
            </button>
            <button type="submit" className="submit-button">Update</button>
          </div>
        
      </form>
        </div>
    )
}

export default EditUser;