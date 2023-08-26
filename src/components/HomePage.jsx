import SearchBar from "./SearchBar";
import Header from "./Header";
import EmployeeList from "./EmployeeList";

// 3.
export default function HomePage({ handleUserClick }) {
  // 4.
  return (
    <div className="HomePage">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList handleUserClick={handleUserClick} />
    </div>
  );
}
