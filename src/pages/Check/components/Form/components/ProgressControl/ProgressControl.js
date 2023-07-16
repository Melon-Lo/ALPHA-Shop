import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow } from 'icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from 'icons/left-arrow.svg'

function Page1({ handleNextClick }) {
  return (
    <>
      <button 
        className={styles.next}
        onClick={handleNextClick}>
        下一步
        <RightArrow className={styles.stepButton} />
      </button>
    </>
  )
}

function Page2({ handleNextClick, handlePreviousClick }) {
  return (
    <>
      <button 
        className={styles.previous}
        onClick={handlePreviousClick}>
        <LeftArrow className={styles.stepButton} />
        上一步
      </button>
      <button 
        className={styles.next}
        onClick={handleNextClick}>
        下一步
        <RightArrow className={styles.stepButton} />
      </button>
    </>
  )
}

function Page3({ handlePreviousClick }) {
  return (
    <>
      <button 
        className={styles.previous}
        onClick={handlePreviousClick}>
        <LeftArrow className={styles.stepButton} />
        上一步
      </button>
      <button 
        className={styles.next}>
        完成訂單
      </button>
    </>
  )
}



export default function ProgressControl({ step, setStep }) {

  function handlePreviousClick() {
    if(step > 1) {
      setStep(step - 1)
    } else {
      return
    }
  }

  function handleNextClick() {
    if(step < 3) {
      setStep(step + 1)
    } else {
      return
    }
  }

  return(
    <section className={styles.progressControlContainer}>
      <div className={styles.buttonGroup}>
        {step === 1 && <Page1 handleNextClick={handleNextClick}/>}
        {step === 2 && <Page2 handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick}/>}
        {step === 3 && <Page3 handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick}/>}
      </div>
    </section>
  )
}
