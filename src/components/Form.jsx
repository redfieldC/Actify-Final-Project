import React from "react";
import { useForm } from "react-hook-form";
import "./tableStyle.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-info">
        <label htmlFor="">ID</label>
        <input
          type="text"
          {...register("id", {
            required: "ID is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "ID must be a number",
            },
          })}
        />
        {errors.id && <p className="error-message">{errors.id.message}</p>}
      </div>
      <div className="form-info">
        <label htmlFor="">Name</label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/, // Regular expression for letters and spaces only
              message: "Name cannot contain numbers or special characters",
            },
          })}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>
      <div className="form-info">
        <label htmlFor="">Age</label>
        <input
          type="text"
          {...register("age", {
            required: "Age is required",
            pattern: {
              value: /^[1-9][0-9]*$/,
              message: "Age  must be valid number",
            },
            min: {
              value: 18,
              message: "Age must be at least 18",
            },
            max: {
              value: 100,
              message: "age must be less than or equal  to 100",
            },
          })}
        />
        {errors.age && <p className="error-message">{errors.age.message}</p>}
      </div>
      <div className="form-info">
        <label htmlFor="">Job</label>
        <input
          type="text"
          {...register("job", {
            required: "Job is required",
            minLength: {
              value: 3,
              message: "Job must be at least 3 characters",
            },
          })}
        />
        {errors.job && <p className="error-message">{errors.job.message}</p>}
      </div>
      <div className="submit-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
