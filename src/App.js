import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  async function testFetch() {
    setIsLoading(true); // 요청 시작 시 로딩 상태를 true로 설정
    fetch(`${process.env.REACT_APP_SERVER_URL}/goods`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((obj) => {
        document.querySelector(".testfetch").innerHTML = JSON.stringify(obj);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false)); // 요청 완료 시 로딩 상태를 false로 설정
  }

  return (
    <div className="App">
      <button onClick={testFetch} disabled={isLoading}>
        {isLoading ? "연동 중..." : "연동 테스트2"}
      </button>
      <div className="testfetch"></div>
    </div>
  );
}

export default App;
