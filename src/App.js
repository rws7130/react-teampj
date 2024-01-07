import "./App.css";

async function testFetch() {
  fetch(`${process.env.REACT_APP_SERVER_URL}/goods`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      return r.json();
    })
    .then((obj) => {
      document.querySelector(".testfetch").innerHTML = JSON.stringify(obj);
    })
    .catch((err) => console.log(err));
}

function App() {
  return (
    <div className="App">
      <button onClick={testFetch}>Test Fetch</button>
      <div className="testfetch"></div>
    </div>
  );
}

export default App;
