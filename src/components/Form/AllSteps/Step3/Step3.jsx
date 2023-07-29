import { FormContext } from 'context/FormContext'
import styles from './Step3.module.css'
import { useContext } from 'react'

export default function Step3() {
  const { inputChange } = useContext(FormContext)

  return (
    <section className={styles.stepThreeContainer}>
      <form action="submit" className={styles.creditCard}>
        <h3 className={styles.formTitle}>付款資訊
        </h3>
        <div className={styles.inputContainer}>
          <div className={styles.creditName}>
            <p className={styles.inputLabel}>持卡人姓名</p>
            <input 
              name="cardOwner"
              className={styles.inputBox} 
              type="text" placeholder="請輸入姓名"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className={styles.creditNumber}>
            <p className={styles.inputLabel}>卡號</p>
            <input
              name="cardNum"
              className={styles.inputBox}
              type="text" 
              placeholder="請輸入卡號"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className={styles.expiredDate}>
            <p className={styles.inputLabel}>有限期限</p>
            <input  
              name="cardExpiredDate"
              className={styles.inputBox}
              type="month"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className={styles.CVC}>
            <p className={styles.inputLabel}>CVC / CCV</p>
            <input
              name="cardCvc"
              className={styles.inputBox}
              type="number"
              onChange={(e) => inputChange(e)}
            />
          </div>
        </div>
      </form>
    </section>
  )
}