import React, { useState } from "react";
import { addTodo, deleteTodo, updateTodo } from "../store/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const Crud = () => {
  const dispatch = useDispatch();
  const [updateId, setUpdateId] = useState(false)
  const list = useSelector((state) => state.todoReducer.data);
  const [value, setValue] = useState("");



  const onChange = (e) => {
    setValue(e.target.value);
  };

  console.log({ value });

  const Submit = (e) => {
    e.preventDefault();
    if (updateId) {
      dispatch(updateTodo(updateId, value));
      console.log({ value });
      setUpdateId(false);
      setValue("");
    } else {
      dispatch(addTodo(value));
      setValue("");
    }
  };


  const deleted = (id) => {
    dispatch(deleteTodo(id));
  }

  const update = (id, data) => {
    setValue(data);
    setUpdateId(id)
    console.log({ data, id });

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
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.data}</td>

                    <td><button onClick={() => update(e.id, e.data)} className='btn btn-tt btn-primary'>Update</button>
                      <button onClick={() => deleted(e.id)} className='btn btn-primary '  >Delete</button>
                    </td>

                  </tr>
                );
              })}
          </tbody>

        </Table>
      </div>
    </div>
  );
};

export default Crud;
