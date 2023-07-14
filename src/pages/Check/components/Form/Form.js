import StepProgress from "./components/StepProgress/StepProgress"
import Step1 from "./components/Step1/Step1"
import Step2 from "./components/Step2/Step2"
import Step3 from "./components/Step3/Step3"
import ProgressControl from "./components/ProgressControl/ProgressControl"

export default function Form() {
  return (
    <>
      <StepProgress />
      <Step1 />
      {/* <Step2 />
      <Step3 /> */}
      <ProgressControl />
    </>
  )
}