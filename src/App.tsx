import Profile from "./components/Profile"
import defaultData from "./data/defaultUser"

function App() {
  return (
      <main>
        <Profile {...defaultData} />
      </main>
  )
}

export default App