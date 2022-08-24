import { useState, useContext, useEffect } from "react"
import searchContext from "../../context/searchContext"

const CheckboxComponent = ()=> {
  const {fullTimeFilter, setFullTimeFilter} = useContext(searchContext)
  const [checked, setChecked] = useState<boolean>(fullTimeFilter)
  function toggleCheckbox() {
    setChecked((prevCheck)=> prevCheck = !prevCheck)
  }

  useEffect(()=> {
    setFullTimeFilter(checked)
  }, [checked])

  return(
    <div 
      onClick={toggleCheckbox}
      className={`
        flex
        justify-center
        items-center 
        h-6
        w-6
        rounded-sm
        cursor-pointer
      `}
      style={
          {
            backgroundColor: checked ? 
            '#5964E0' : 
            '#F4F6F8'
          }}
    >
      {checked && <img 
        src="/assets/desktop/icon-check.svg" 
        alt="Check" 
      />}
      
    </div>
  )
}

export default CheckboxComponent