import styles from './Step3.module.css'

export default function Step3() {
  return (
    <section className={styles.stepThreeContainer}>
      <form action="submit" className={styles.creditCard}>
        <h3 className={styles.formTitle}>付款資訊
        </h3>
        <div className={styles.inputContainer}>
          <div className={styles.creditName}>
            <p className={styles.inputLabel}>持卡人姓名</p>
            <input className={styles.inputBox} type="text" placeholder="請輸入姓名" />
          </div>
          <div className={styles.creditNumber}>
            <p className={styles.inputLabel}>卡號</p>
            <input className={styles.inputBox} type="text" placeholder="請輸入卡號" />
          </div>
          <div className={styles.expiredDate}>
            <p className={styles.inputLabel}>有限期限</p>
            <input className={styles.inputBox} type="month" />
          </div>
          <div className={styles.CVC}>
            <p className={styles.inputLabel}>CVC / CCV</p>
            <input className={styles.inputBox} type="number" />
          </div>
        </div>
      </form>
    </section>
  )
}