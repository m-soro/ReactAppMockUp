// 7.
export default function EmployeeListItem({
  employeeName,
  employeeTitle,
  employeeImage,
  handleUserClick,
}) {
  // 8. an arrow function to run the function
  return (
    <div
      onClick={() =>
        handleUserClick({
          name: employeeName,
          title: employeeTitle,
          image: employeeImage,
        })
      }
      className="EmployeeListItem"
    >
      <img src={employeeImage} alt={`${employeeName} image`} />
      <ul>
        <h3>{employeeName}</h3>
        <p>{employeeTitle}</p>
      </ul>
    </div>
  );
}
