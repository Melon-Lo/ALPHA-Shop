import StepProgress from "./components/StepProgress/StepProgress"
import AllSteps from "./components/AllSteps/AllSteps"
import ProgressControl from "./components/ProgressControl/ProgressControl"

import styles from './Form.module.css'
import { useState } from 'react'

export default function Form() {
  const [step, setStep] = useState(1)

  return (
    <section className={styles.formContainer}>
      <StepProgress />
      <AllSteps step={step} />
      <ProgressControl step={step} setStep={setStep}/>
    </section>
  )
}