import Step1 from "./Step1/Step1"
import Step2 from "./Step2/Step2"
import Step3 from "./Step3/Step3"
import styles from './AllSteps.module.css'
import { useContext } from "react"
import { FormContext } from "context/FormContext"

export default function AllSteps() {
  const { step } = useContext(FormContext)

  return (
    <section className={styles.allStepsContainer}>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </section>
  )
}