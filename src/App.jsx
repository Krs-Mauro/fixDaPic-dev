import hideApp from "./landingScripts/hideApp";

const App = (user) => {
  return (
    <>
      <h1>{user ? "user " : "pay per use "} app</h1>
      <button onClick={hideApp}>home</button>
    </>
  );
};

export default App;
