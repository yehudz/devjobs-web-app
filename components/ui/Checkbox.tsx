import { useState } from "react"

const CheckboxComponent = ()=> {
  const [checked, setChecked] = useState<boolean>(true)

  function toggleCheckbox() {
    setChecked((prevCheck)=> prevCheck = !prevCheck)
  }
  console.log(checked)
  return(
    <div 
      onClick={toggleCheckbox}
      className={`
        flex
        justify-center
        items-center 
        bg-${checked ? 'violet' : 'gray'}
        hover:bg-light-violet
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