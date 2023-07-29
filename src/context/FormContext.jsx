import { createContext, useState } from "react";

const blankInfo = {
  title: '',
  name: '',
  tel: '',
  email: '',
  city: '',
  address: '',
  cardOwner: '',
  cardNum: '',
  cardExpiredDate: '',
  cardCvc: '',
}

export const FormContext = createContext()

export default function FormContextProvider({children}) {
  const [Info, setInfo] = useState(blankInfo)

  function inputChange(e) {
    setInfo({...Info, [e.target.name]: e.target.value})
  }

  function submitForm() {
    console.log(Info)
    alert('已送出表單！可於console中查看。')
  }

  return (
    <FormContext.Provider
      value={{ 
        inputChange,
        submitForm
      }}
    >
      {children}
    </FormContext.Provider>
  )
}