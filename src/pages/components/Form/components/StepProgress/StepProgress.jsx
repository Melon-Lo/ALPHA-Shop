import styles from './StepProgress.module.css'


export default function StepProgress({ step }) {
  function ProgressStep({ currentStep, label }) {
    return (
      <div className="progressStep">
        <span className={step === currentStep ? "activeIcon" : "progressIcon"}>
          <span className={step === currentStep ? "activeText" : "progressText"}>{currentStep}</span>
        </span>
        <span className={step === currentStep ? "activeLabel" : "progressLabel"}>{label}</span>
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