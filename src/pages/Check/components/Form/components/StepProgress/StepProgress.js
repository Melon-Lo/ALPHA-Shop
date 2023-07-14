import styles from './StepProgress.module.css'

export default function StepProgress() {
  return (
    <section className={styles.stepProgressContainer}>
      <div className={styles.progressStep}>
        <span className={styles.progressIcon}>
          <span className={styles.progressText}>1</span>
        </span>
        <span className={styles.progressLabel}>寄送地址</span>
      </div>
      <div className={styles.progressStep}>
        <span className={styles.progressIcon}>
          <span className={styles.progressText}>2</span>
        </span>
        <span className={styles.progressLabel}>運送方式</span>
      </div>
      <div className={styles.progressStep}>
        <span className={styles.progressIcon}>
          <span className={styles.progressText}>3</span>
        </span>
        <span className={styles.progressLabel}>付款資訊</span>
      </div>
    </section>
  )
}