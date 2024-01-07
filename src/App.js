import "./App.css";

function App() {
  console.log(process.env.REACT_APP_SERVER_URL);
  // fetch(`${process.env.SERVER_URL}/goods`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  return <div className="App">형상관리 푸쉬 테스트1</div>;
}

export default App;
