// import DaisyNav from "./Components/DaisyNav/DaisyNav"
// import { LineChart } from "recharts"
import NavBar from "./Components/NavBar/NavBar"
import PriceOptions from "./Components/PriceOptions/PriceOptions"
import Chart from "./Components/LineChart/Chart"
import Phones from "./Components/Phones/Phones"

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <h1 className='text-2xl text-center'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
      <Phones></Phones>
    </>
  )
}

export default App
