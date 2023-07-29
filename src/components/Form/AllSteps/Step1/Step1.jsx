import styles from './Step1.module.css'
import cityData from './cityData'
import { useContext } from 'react'
import { FormContext } from 'context/FormContext'

export default function Step1() {
  const cityOption = cityData.map(city => (
    <option value={city.value} key={city.id}>{city.name}</option>
  ))
  const { inputChange } = useContext(FormContext)

  return (
    <section className={styles.stepOneContainer}>
      <form action="submit" className={styles.contact}>
        <h3 className={styles.formTitle}>寄送地址</h3>
        <div className={styles.inputContainer}>
          <div className={styles.title}>
            <p className={styles.inputLabel}>稱謂</p>
            <div className={styles.selectorContainer}>
              <select
                name="title" 
                className={styles.optionBox}
                onChange={(e) => inputChange(e)}
              >
                <option value="mr">先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div> 
          <div className={styles.name}>
            <p className={styles.inputLabel}>姓名</p>
            <input
              name="name" 
              className={styles.inputBox}
              type="text"
              placeholder="請輸入姓名"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className={styles.phoneNumber}>
            <p className={styles.inputLabel}>電話</p>
            <input
              name="tel"
              className={styles.inputBox}
              type="text" 
              placeholder="請輸入行動電話"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className={styles.email}>
            <p className={styles.inputLabel}>E-mail</p>
            <input
              name="email"
              className={styles.inputBox}
              type="text" 
              placeholder="請輸入電子郵件"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className={styles.city}>
            <p className={styles.inputLabel}>縣市</p>
            <div className={styles.selectorContainer}>
              <select
                name="city"
                className={styles.optionBox}
                onChange={(e) => inputChange(e)}
              >
                <option value="">請選擇縣市</option>
                {cityOption}
              </select>
            </div>
          </div>
          <div className={styles.address}>
            <p className={styles.inputLabel}>地址</p>
            <input
              name="address"
              className={styles.inputBox}
              type="text" 
              placeholder="請輸入地址"
              onChange={(e) => inputChange(e)}
            />
          </div>
        </div>
      </form>
    </section>
  )
}