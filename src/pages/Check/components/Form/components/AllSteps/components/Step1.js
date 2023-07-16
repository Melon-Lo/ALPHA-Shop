import styles from './Step1.module.css'
import cityData from '../cityData'

export default function Step1() {
  const cityOption = cityData.map(city => (
    <option value={city.value} key={city.id}>{city.name}</option>
  ))

  return (
    <section className={styles.stepOneContainer}>
      <form action="submit" className={styles.contact}>
        <h3 className={styles.formTitle}>寄送地址</h3>
        <div className={styles.inputContainer}>
          <div className={styles.title}>
            <p class={styles.inputLabel}>稱謂</p>
            <div class={styles.selectorContainer}>
              <select class={styles.optionBox}>
                <option value="mr" selected>先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div> 
          <div className={styles.name}>
            <p className={styles.inputLabel}>姓名</p>
            <input className={styles.inputBox} type="text" placeholder="請輸入姓名" />
          </div>
          <div className={styles.phoneNumber}>
            <p className={styles.inputLabel}>電話</p>
            <input className={styles.inputBox} type="text" placeholder="請輸入行動電話" />
          </div>
          <div className={styles.email}>
            <p className={styles.inputLabel}>E-mail</p>
            <input className={styles.inputBox} type="text" placeholder="請輸入電子郵件" />
          </div>
          <div className={styles.city}>
            <p className={styles.inputLabel}>縣市</p>
            <div className={styles.selectorContainer}>
              <select className={styles.optionBox}>
                <option value="" selected>請選擇縣市</option>
                {cityOption}
              </select>
            </div>
          </div>
          <div className={styles.address}>
            <p className={styles.inputLabel}>地址</p>
            <input className={styles.inputBox} type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </form>
    </section>
  )
}