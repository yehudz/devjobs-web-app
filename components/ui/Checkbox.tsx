import { useState } from "react"

const CheckboxComponent = ()=> {
  const [checked, setChecked] = useState<boolean>(false)

  function toggleCheckbox() {
    setChecked((prevCheck)=> prevCheck = !prevCheck)
  }
  return(
    <div 
      onClick={toggleCheckbox}
      className={`
        flex
        justify-center
        items-center 
        bg-${checked ? 'violet' : 'gray'}
        border
        border-gray
        h-6
        w-6
        rounded-sm
        cursor-pointer
      `}
    >
      {checked && <img 
        src="assets/desktop/icon-check.svg" 
        alt="Check" 
      />}
      
    </div>
  )
}

export default CheckboxComponent