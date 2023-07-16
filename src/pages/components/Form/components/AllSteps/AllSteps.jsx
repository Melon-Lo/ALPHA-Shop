import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import styles from './AllSteps.module.css'

export default function AllSteps({ step }) {
  return (
    <section className={styles.allStepsContainer}>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </section>
  )
}