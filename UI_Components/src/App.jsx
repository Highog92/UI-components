import { UIbuttons } from './Components/Button/Buttons'
import { Darkmode } from './Components/Darkmode/Darkmode'
import { Navigation } from './Components/Nav/Nav1/Navigation'
// import { IndicatorNav } from './Components/Nav/Nav2/IndicatorNav'
import { Input } from './Components/Input/Input'
import { Grid } from './Components/Grid/Grid'
function App() {

  return (
    <>
      <Navigation />
      <UIbuttons />
      <Darkmode />
      {/* <IndicatorNav /> */}
      <Input />
      <Grid />
    </>
  )
}

export default App
