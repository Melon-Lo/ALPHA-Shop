import StepProgress from "components/Form/StepProgress/StepProgress"
import AllSteps from "components/Form/AllSteps/AllSteps"
import ProgressControl from "components/Form/ProgressControl/ProgressControl"

import './Form.css'

export default function Form() {
  return (
    <section className="formContainer">
      <StepProgress />
      <AllSteps />
      <ProgressControl />
    </section>
  )
}