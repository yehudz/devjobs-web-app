import { ButtonProps } from "../../typings/common.types";
import styles from '../../styles/ui/button.module.scss';
import { useEffect, useState, useContext } from "react";
import searchContext from "../../context/searchContext";
const Button: React.FC<ButtonProps> = ({
  children,
  type,
  isPopup,
  isMobile
}) => {
  const {setSearching} = useContext(searchContext)
  const [style, setStyle] = useState<any>()
  function handleClick() {
    setSearching(true)
    setTimeout(()=> {
      setSearching(false)
    }, 1000)
  }
  useEffect(()=> {
    switch(type) {
      case 'primary':
        setStyle(styles.primary)
        break
      case 'secondary':
        setStyle(styles.secondary)
        break
      case 'dark':
        setStyle(styles.dark)
        break
      case 'icon':
        setStyle(style.iconBtn)
        break;
    }
  }, [])
  return(
    <button 
      onClick={handleClick}
      className={`
        ${isPopup && 'large-btn'}
        ${styles.container}
        ${style} 
        flex
        justify-center
        items-center
        rounded-md
        font-regular
        font-bold
        px-6
        min-w-full
        sm:min-w-[48px]
        md:min-w-[80px]
        lg:min-w-[141px]
      `}
    >
      {children}
    </button>
  )
};

export default Button