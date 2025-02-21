import StuForm from "./CMS/StuForm.jsx";
import StuItem from "./CMS/StuItem";
import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  // localStorage에서 'users' 데이터를 불러옵니다. 없으면 빈 배열을 기본값으로 사용합니다.
  // const storedUser = JSON.parse(localStorage.getItem("users"));

  const [users, setUsers] = useState([]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("updated");
  });

  useEffect(() => {
    const user = localStorage.getItem("users");
    if (user) {
      setUsers(JSON.parse(user));
    }
  }, []);

  return (
    <>
      <div className="title">
        <h1>CMS</h1>
      </div>
      <div className="con">
        <StuForm setUsers={setUsers} users={users} />
        <ul className="stu">
          {users.map((user, index) => {
            return (
              <StuItem
                key={user.studentid}
                index={index}
                user={user}
                users={users}
                setUsers={setUsers}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;
