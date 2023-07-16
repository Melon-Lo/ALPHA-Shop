import styles from './Step2.module.css'

export default function Step2() {
  return (
    <section className={styles.stepTwoContainer}>
      <form action="submit" className={styles.form}>
        <h3 className="formTitle">運送方式</h3>
        <div className={styles.inputContainer}>
          <label class={styles.radioGroup}data-price="0">
            <input id="shipping-standard" type="radio" name="shipping"  checked/>
            <div  className={styles.infoBox}>
              <div class={styles.info}>
                <div>標準運送</div>
                <div class={styles.price}>免費</div>
              </div>
              <div class={styles.period}>約 3~7 個工作天</div>
            </div>
            <div class="radio-box-border"></div>
          </label>
          <label class={styles.radioGroup} data-price="500">
            <input id="shipping-dhl" type="radio" name="shipping" />
            <div className={styles.infoBox}>
              <div className={styles.info}>
                <div class={styles.text}>DHL 貨運</div>
                <div class={styles.price}>$500</div>
              </div>
              <div class={styles.period}>48 小時內送達</div>
            </div>
            <div class="radio-box-border"></div>
          </label>
        </div>
      </form>
    </section>
  )
}