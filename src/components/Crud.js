import React, { useState } from "react";
import { addTodo, deleteTodo } from "../store/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const Crud = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.data);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  
  const Submit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const deleted  = (id) => {
    dispatch(deleteTodo(id));
  }

  const update = () => {

  }

  return (
    <div className="container">
      <form onSubmit={Submit}>
        <label htmlFor="name"> Name</label>

        <input
          required
          type="text"
          value={value}
          onChange={onChange}
          name="name"
          id="name"
          placeholder="Enter  Name"
        />
        <br />

        <br />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
      <div className="data-container col-md-6 col-12 mt-5 mt-md-0">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((e) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.data}</td>
                    
                    <td><button onClick={() => update(e.id)}  className='btn btn-tt btn-primary'>Update</button>
                    <button onClick={() => deleted(e.id)} className='btn btn-primary '  >Delete</button>
                    </td>

                  </tr>
                );
              })}
          </tbody>
          {/* <tbody>
            {data.length < 1 && (
              <td colSpan={4} className="text-center p-3">
             <h4> Data Not Added  </h4>
              </td>
            )}
            {data &&
              data.map((e, index) => {
                return (
                  <tr key={index}>
                    
                    <td>{e.fname}</td>
                    <td>{e.lname}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary ml-2"
                        onClick={() => Update(e.id)}
                      >
                        Update
                      </button>{" "}
                      <button
                        onClick={() => deleteData(e.id)}
                        className="pl-2 btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody> */}
        </Table>
      </div>
    </div>
  );
};

export default Crud;
