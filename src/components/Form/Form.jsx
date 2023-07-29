import StepProgress from "components/Form/StepProgress/StepProgress"
import AllSteps from "components/Form/AllSteps/AllSteps"
import ProgressControl from "components/Form/ProgressControl/ProgressControl"

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