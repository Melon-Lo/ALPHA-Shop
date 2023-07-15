import { ReactComponent as RightArrow } from '../../../../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../../../../../../icons/left-arrow.svg'
import styles from './ProgressControl.module.css'

export default function ProgressControl() {
  return(
    <section className={styles.progressControlContainer}>
      <div className={styles.buttonGroup}>
        <button className={styles.previous}>
          <LeftArrow />上一步
        </button>
        <button className={styles.next}>
          下一步<RightArrow />
        </button>
      </div>
    </section>
  )
}
