import './Step3.scss'
import { FormContext } from 'context/FormContext'
import { useContext } from 'react'

export default function Step3() {
  const { inputChange } = useContext(FormContext)

  return (
    <section className="stepThreeContainer">
      <form action="submit" className="creditCard">
        <h3 className="formTitle">付款資訊
        </h3>
        <div className="inputContainer">
          <div className="creditName">
            <p className="inputLabel">持卡人姓名</p>
            <input 
              name="cardOwner"
              className="inputBox" 
              type="text" placeholder="請輸入姓名"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className="creditNumber">
            <p className="inputLabel">卡號</p>
            <input
              name="cardNum"
              className="inputBox"
              type="text" 
              placeholder="請輸入卡號"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className="expiredDate">
            <p className="inputLabel">有限期限</p>
            <input  
              name="cardExpiredDate"
              className="inputBox"
              type="month"
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className="CVC">
            <p className="inputLabel">CVC / CCV</p>
            <input
              name="cardCvc"
              className="inputBox"
              type="number"
              onChange={(e) => inputChange(e)}
            />
          </div>
        </div>
      </form>
    </section>
  )
}