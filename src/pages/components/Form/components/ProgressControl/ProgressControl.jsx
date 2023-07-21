import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'

export default function ProgressControl({ step, setStep }) {
  function Button({ className, onClick, text}) {
   return (
      <button className={className} onClick={onClick}>
        {text === '上一步' && <LeftArrow className={styles.stepButton}/>}
        {text}
        {text === '下一步' && <RightArrow className={styles.stepButton}/>}
      </button>
    )
  }

  function Step({ step }) {
    if(step === 1) {
      return (
        <Button 
          className={styles.next}
          onClick={handleNextClick}
          text={'下一步'}/>
      )
    } else if(step === 2) {
      return (
        <> 
          <Button 
            className={styles.previous}
            onClick={handlePreviousClick}
            text={'上一步'}/>
          <Button 
            className={styles.next}
            onClick={handleNextClick}
            text={'下一步'}/>
        </>
      )
    } else if(step === 3) {
      return (
      <>
        <Button 
          className={styles.previous}
          onClick={handlePreviousClick}
          text={'上一步'}/>
        <Button 
          className={styles.next}
          // onClick={onClick}
          text={'完成訂單'}/>
      </>
      )
    }
  }

  function handlePreviousClick() {
    if(step > 1) {
      setStep(step - 1)
    }
  }

  function handleNextClick() {
    if(step < 3) {
      setStep(step + 1)
    }
  }

  return(
    <section className={styles.progressControlContainer}>
      <div className={styles.buttonGroup}>
        <Step step={step}/>
      </div>
    </section>
  )
}
