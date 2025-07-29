import "./App.scss";
import Routing from "./routing/Routing";

function App() {
  return (
    <>
      <div className="app">
        {/* <Header /> */}
        <main className="routing">
          <Routing />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
