import StepProgress from "components/Form/StepProgress/StepProgress"
import AllSteps from "components/Form/AllSteps/AllSteps"
import ProgressControl from "components/Form/ProgressControl/ProgressControl"
import { useContext } from "react"
import { WindowWidthContext } from "context/WindowWidthContext"

import './Form.css'

export default function Form() {
  const { windowWidth } = useContext(WindowWidthContext)

  return (
    <section className="formContainer">
      <StepProgress />
      <AllSteps />
      {windowWidth > 576 && <ProgressControl />}
    </section>
  )
}