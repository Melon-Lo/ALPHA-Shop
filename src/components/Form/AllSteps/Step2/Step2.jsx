import './Step2.scss'
import { useContext } from 'react'
import { ShippingContext } from 'context/ShippingContext'

export default function Step2() {
  const { setShipping } = useContext(ShippingContext)

  return (
    <section className="stepTwoContainer">
      <form action="submit" className="form">
        <h3 className="formTitle">運送方式</h3>
          <label className="radioGroup" data-price="0">
            <input 
              id="shipping-standard"
              type="radio"
              name="shipping"
              defaultChecked="checked"
              onClick={() => setShipping(0)}
            />
            <div className="infoBox">
              <div className="info">
                <div>標準運送</div>
                <div className="price">免費</div>
              </div>
              <div className="period">約 3~7 個工作天</div>
            </div>
          </label>
          <label className="radioGroup" data-price="500">
            <input
              id="shipping-dhl"
              type="radio"
              name="shipping" 
              onClick={() => setShipping(500)}
            />
            <div className="infoBox">
              <div className="info">
                <div className="text">DHL 貨運</div>
                <div className="price">$500</div>
              </div>
              <div className="period">48 小時內送達</div>
            </div>
          </label>
      </form>
    </section>
  )
}