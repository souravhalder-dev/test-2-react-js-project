import { Suspense } from "react";
import "./App.css";
import Player from "./player";
import User from "./user";
import Friends from "./friends";

const featchData = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const friends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
function App() {
  const Friendsall = friends();
  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Friends friendsdata={Friendsall}></Friends>
      </Suspense>

      <Suspense fallback={<h3>load...</h3>}>
        <User featchData={featchData}></User>
      </Suspense>
      <Player></Player>
    </>
  );
}

export default App;
