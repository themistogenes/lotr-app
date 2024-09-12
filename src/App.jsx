import Dashboard from "./components/Dashboard"
import "./App.css"
import lotrBackground from "./assets/lotr-background.jpg"

function App() {
  return (
    <>
      <div className="App">
        <header>Header</header>
        <main>
          <img src={lotrBackground} alt="lotr-background-img" className="bg-image" />
          <Dashboard />
        </main>
        {/* <footer>Footer</footer> */}
      </div>
    </>
  )
}

export default App