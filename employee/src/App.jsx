import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    document.title = "Employee Management System"; // Set the page title

    // Fetch employee data from the backend
    fetch('http://localhost:8080/get-all') // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching employee data:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/delete/${id}`, { // Replace with your backend URL
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setEmployees(employees.filter((employee) => employee.id !== id));
        } else {
          console.error('Failed to delete employee');
        }
      })
      .catch((error) => console.error('Error deleting employee:', error));
  };

  const handleEdit = (id, field, value) => {
    fetch(`http://localhost:8080/update-property/${id}`, { // Replace with your backend URL
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value }),
    })
      .then((response) => {
        if (response.ok) {
          setEmployees(
            employees.map((employee) =>
              employee.id === id ? { ...employee, [field]: value } : employee
            )
          );
        } else {
          console.error('Failed to edit employee');
        }
      })
      .catch((error) => console.error('Error editing employee:', error));
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Manager</th>
            <th>Salary</th>
            <th>Expenditure</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  {employee.id}
                  <button
                    onClick={() => handleDelete(employee.id)}
                    style={{ marginLeft: '10px', color: 'red' }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <input
                    type="text"
                    value={employee.name}
                    onChange={(e) => handleEdit(employee.id, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={employee.manager}
                    onChange={(e) => handleEdit(employee.id, 'manager', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={employee.salary}
                    onChange={(e) => handleEdit(employee.id, 'salary', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={employee.expenditure}
                    onChange={(e) => handleEdit(employee.id, 'expenditure', e.target.value)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => console.log('Edit button clicked')} // Placeholder for additional actions
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No employee data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}



export default App;