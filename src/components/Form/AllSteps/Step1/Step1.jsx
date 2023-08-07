import './Step1.scss'
import cityData from './cityData'
import { useContext } from 'react'
import { FormContext } from 'context/FormContext'

export default function Step1() {
  const cityOption = cityData.map(city => (
    <option value={city.value} key={city.id}>{city.name}</option>
  ))
  const { inputChange } = useContext(FormContext)

  return (
    <section className="stepOneContainer">
      <form action="submit" className="contact">
        <h3 className="formTitle">寄送地址</h3>
        <div className="inputContainer">
          <div className="title">
            <p className="inputLabel">稱謂</p>
            <div className="selectorContainer">
              <select
                name="title" 
                className="optionBox"
                onChange={(e) => inputChange(e)}
              >
                <option value="mr">先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div> 
          <div className="name">
            <p className="inputLabel">姓名</p>
            <input
              name="name" 
              className="inputBox"
              type="text"
              placeholder="請輸入姓名"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className="phoneNumber">
            <p className="inputLabel">電話</p>
            <input
              name="tel"
              className="inputBox"
              type="text" 
              placeholder="請輸入行動電話"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className="email">
            <p className="inputLabel">E-mail</p>
            <input
              name="email"
              className="inputBox"
              type="text" 
              placeholder="請輸入電子郵件"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className="city">
            <p className="inputLabel">縣市</p>
            <div className="selectorContainer">
              <select
                name="city"
                className="optionBox"
                onChange={(e) => inputChange(e)}
              >
                <option value="">請選擇縣市</option>
                {cityOption}
              </select>
            </div>
          </div>
          <div className="address">
            <p className="inputLabel">地址</p>
            <input
              name="address"
              className="inputBox"
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