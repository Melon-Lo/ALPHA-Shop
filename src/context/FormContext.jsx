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
  const [step, setStep] = useState(1)

  function inputChange(e) {
    setInfo({...Info, [e.target.name]: e.target.value})
  }

  function handlePreviousClick() {
    if(step > 1) {
      setStep(step - 1)
    }
  }

  function handleNextClick() {
    if(step < 3) {
      setStep(step + 1)
    }
  }

  function submitForm() {
    console.log(Info)
    alert('已送出表單！可於console中查看。')
  }

  return (
    <FormContext.Provider
      value={{ 
        step,
        setStep,
        inputChange,
        submitForm,
        handleNextClick,
        handlePreviousClick
      }}
    >
      {children}
    </FormContext.Provider>
  )
}