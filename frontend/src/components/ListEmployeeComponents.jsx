import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeServices from "../services/EmployeeServices";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    setLoading(true); // Start loading
    EmployeeServices.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError("Error fetching employee data.");
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const deleteEmployee = (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setLoading(true);
      EmployeeServices.deleteEmployee(employeeId)
        .then((response) => {
          getAllEmployees();
        })
        .catch((error) => {
          setError("Error deleting employee.");
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* Show error message */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee First Name</th>
            <th scope="col">Employee Last Name</th>
            <th scope="col">Employee Email Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-employee/${employee.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;