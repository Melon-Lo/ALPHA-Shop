// import { ReactComponent as RightArrow } from './public/icons/right-arrow.svg'
import styles from './ProgressControl.module.css'

export default function ProgressControl() {
  return(
    <section className={styles.progressControlContainer}>
      <div className={styles.buttonGroup}>
        <button className={styles.next}>下一步</button>
        {/* <RightArrow /> */}
      </div>
    </section>
  )
}