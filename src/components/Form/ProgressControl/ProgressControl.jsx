import './ProgressControl.scss'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'

import { useContext } from 'react'
import { FormContext } from 'context/FormContext'

function Button({ className, onClick, text}) {
  return (
    <button className={className} onClick={onClick}>
      {text === '上一步' && <LeftArrow className="icon"/>}
      {text}
      {text === '下一步' && <RightArrow className="icon"/>}
    </button>
  )
}

function Step() {
  const { step, handleNextClick, handlePreviousClick } = useContext(FormContext)

  const { submitForm } = useContext(FormContext)

  if(step === 1) {
    return (
      <Button 
        className="next"
        onClick={handleNextClick}
        text={'下一步'}/>
    )
  } else if(step === 2) {
    return (
      <> 
        <Button 
          className="previous"
          onClick={handlePreviousClick}
          text={'上一步'}/>
        <Button 
          className="next"
          onClick={handleNextClick}
          text={'下一步'}/>
      </>
    )
  } else if(step === 3) {
    return (
    <>
      <Button 
        className="previous"
        onClick={handlePreviousClick}
        text={'上一步'}/>
      <Button 
        className="next"
        onClick={submitForm}
        text={'完成訂單'}/>
    </>
    )
  }
}

export default function ProgressControl() {
  const { step, setStep } = useContext(FormContext)

  return(
    <section className="progressControlContainer">
      <div className="buttonGroup">
        <Step step={step} setStep={setStep}/>
      </div>
    </section>
  )
}
