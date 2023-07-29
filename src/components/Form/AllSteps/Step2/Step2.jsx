import styles from './Step2.module.css'
import { useContext } from 'react'
import { ShippingContext } from 'context/ShippingContext'

export default function Step2() {
  const { setShipping } = useContext(ShippingContext)

  return (
    <section className={styles.stepTwoContainer}>
      <form action="submit" className={styles.form}>
        <h3 className="formTitle">運送方式</h3>
        <div className={styles.inputContainer}>
          <label className={styles.radioGroup}data-price="0">
            <input 
              id="shipping-standard"
              type="radio"
              name="shipping"
              defaultChecked="checked"
              onClick={() => setShipping(0)}
            />
            <div className={styles.infoBox}>
              <div className={styles.info}>
                <div>標準運送</div>
                <div className={styles.price}>免費</div>
              </div>
              <div className={styles.period}>約 3~7 個工作天</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
          <label className={styles.radioGroup} data-price="500">
            <input
              id="shipping-dhl"
              type="radio"
              name="shipping" 
              onClick={() => setShipping(500)}
            />
            <div className={styles.infoBox}>
              <div className={styles.info}>
                <div className={styles.text}>DHL 貨運</div>
                <div className={styles.price}>$500</div>
              </div>
              <div className={styles.period}>48 小時內送達</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
        </div>
      </form>
    </section>
  )
}