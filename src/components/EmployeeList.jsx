import EmployeeListItem from "./EmployeeListItem";
// 6.
export default function EmployeeList({ handleUserClick }) {
  const employeeObjectList = [
    {
      id: 1,
      empName: "James King",
      title: "President and CEO",
      officeNum: "123-456-7890",
      mobileNum: "123-456-7890",
      sms: "123-456-7890",
      email: "myemail@gmail.com",
      img: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      id: 2,
      empName: "Julie Taylor",
      title: "VP of Marketing",
      officeNum: "123-456-7890",
      mobileNum: "123-456-7890",
      sms: "123-456-7890",
      email: "myemail@gmail.com",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 3,
      empName: "Eugene Lee",
      title: "Chief Financial Officer",
      officeNum: "123-456-7890",
      mobileNum: "123-456-7890",
      sms: "123-456-7890",
      email: "myemail@gmail.com",
      img: "https://randomuser.me/api/portraits/men/73.jpg",
    },
    {
      id: 4,
      empName: "John Williams",
      title: "VP of Engineering",
      officeNum: "123-456-7890",
      mobileNum: "123-456-7890",
      sms: "123-456-7890",
      email: "myemail@gmail.com",
      img: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      id: 5,
      empName: "Ray Moore",
      title: "VP of Sales",
      officeNum: "123-456-7890",
      mobileNum: "123-456-7890",
      sms: "123-456-7890",
      email: "myemail@gmail.com",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      id: 6,
      empName: "Paul Jones",
      title: "QA Manager",
      officeNum: "123-456-7890",
      mobileNum: "123-456-7890",
      sms: "123-456-7890",
      email: "myemail@gmail.com",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
    },
  ];

  return (
    <div className="EmployeeList">
      {employeeObjectList.map((item) => {
        console.log(item.img);
        return (
          <EmployeeListItem
            handleUserClick={handleUserClick}
            employeeImage={item.img}
            employeeName={item.empName}
            employeeTitle={item.title}
          />
        );
      })}
    </div>
  );
}
