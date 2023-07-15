import { ReactComponent as RightArrow } from '../../../../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../../../../../../icons/left-arrow.svg'
import styles from './ProgressControl.module.css'
import { useState } from 'react'

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
      </div>
    </section>
  )
}
