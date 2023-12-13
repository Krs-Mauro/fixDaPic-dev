const App = () => {
  if (window.location.pathname.includes("/app"))
    return (
      <>
        <h1>Pay per use app</h1>
        <a href="/">home</a>
      </>
    );

  return (
    <>
      <h1>User app</h1>
      <a href="/">home</a>
    </>
  );
};

export default App;
