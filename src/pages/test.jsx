import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { useState } from "react";

const Test = () => {
  // useStateを使い、fetchしてきた配列を格納する。
  const [users, setUsers] = useState([]);

  const callApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
    console.log(users);
  };

  // useStateの中に格納された配列をmapで出力し、表示する。
  return (
    <>
      <Header />
      <div>
        <button onClick={callApi}>ボタン</button>
        <div className="container">
          <ul className="userList">
            {users.map((user) => {
              return (
                <li key={user.username}>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Test;
