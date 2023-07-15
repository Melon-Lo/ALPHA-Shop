import StepProgress from "./components/StepProgress/StepProgress"
import Step1 from "./components/Step1/Step1"
import Step2 from "./components/Step2/Step2"
import Step3 from "./components/Step3/Step3"
import ProgressControl from "./components/ProgressControl/ProgressControl"

import styles from './Form.module.css'
import { useState } from 'react'

export default function Form() {
  const [step, setStep] = useState(1)

  return (
    <section className={styles.formContainer}>
      <StepProgress />
      <Step1 />
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      <ProgressControl step={step} setStep={setStep}/>
    </section>
  )
}