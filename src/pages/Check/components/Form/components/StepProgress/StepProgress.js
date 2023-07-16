import styles from './StepProgress.module.css'

export default function StepProgress({ step }) {
  return (
    <section className="stepProgressContainer">
      <div className="progressStep">
        <span className={step === 1 ? "activeIcon" : "progressIcon"}>
          <span className={step === 1 ? "activeText" : "progressText"}>1</span>
        </span>
        <span className={step === 1 ? "activeLabel" : "progressLabel"}>寄送地址</span>
      </div>
      <div className="progressStep">
        <span className={step === 2 ? "activeIcon" : "progressIcon"}>
          <span className={step === 2 ? "activeText" : "progressText"}>2</span>
        </span>
        <span className={step === 2 ? "activeLabel" : "progressLabel"}>運送方式</span>
      </div>
      <div className="progressStep">
        <span className={step === 3 ? "activeIcon" : "progressIcon"}>
          <span className={step === 3 ? "activeText" : "progressText"}>3</span>
        </span>
        <span className={step === 3 ? "activeLabel" : "progressLabel"}>付款資訊</span>
      </div>
    </section>
  )
}