import Header from "./Header";
export default function EmployeePage({ employee }) {
  return (
    <div className="EmployeePage">
      <Header title="Employee" />

      <div className="EmployeeOverview card">
        <img
          src={employee.image}
          className="ProfilePic"
          alt={`${employee.name} image`}
        />
        <ul>
          <h3>{employee.name}</h3>
          <p>{employee.title}</p>
        </ul>
      </div>

      <div className="EmployeeOffice card">
        <h3>Call Mobile</h3>
        <p>123-456-7890</p>
      </div>

      <div className="EmployeeMobile card">
        <h3>Call Office</h3>
        <p>123-456-7890</p>
      </div>

      <div className="EmployeeSMS card">
        <h3>SMS</h3>
        <p>123-456-7890</p>
      </div>

      <div className="EmployeeEmail card">
        <h3>Email</h3>
        <p>myemail@gmail.com</p>
      </div>
    </div>
  );
}
