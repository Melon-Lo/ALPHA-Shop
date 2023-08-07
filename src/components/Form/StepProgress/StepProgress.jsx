import './StepProgress.scss'
import { useContext } from 'react'
import { FormContext } from 'context/FormContext'
import { ThemeContext } from 'context/ThemeContext'

export default function StepProgress() {
  const { step } = useContext(FormContext)
  const { dark } = useContext(ThemeContext)
  
  function ProgressStep({ currentStep, label }) {
    function getLabelClassName() {
      let labelClassName = ''
      if(step === currentStep && dark === false) {
        labelClassName = 'lightActive'
      } else if(step === currentStep && dark === true) {
        labelClassName = 'darkActive'
      } else {
        labelClassName = 'notActive'
      }
      return labelClassName
    }
 
    return (
      <div className="progressStep">
        <span 
          className= { 
            step === currentStep ?
            "activeIcon" :
            "progressIcon"
          }
        >
          <span className={step === currentStep ? "activeText" : "progressText"}>{currentStep}</span>
        </span>
        <span className={getLabelClassName()}>{label}</span>
      </div>
    )
  }

  return (
    <section className="stepProgressContainer">
      <ProgressStep currentStep={1} label={'寄送地址'}/>
      <ProgressStep currentStep={2} label={'運送方式'}/>
      <ProgressStep currentStep={3} label={'付款資訊'}/>
    </section>
  )
}