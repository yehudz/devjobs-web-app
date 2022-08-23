import { ButtonProps } from "../../typings/common.types";
import styles from '../../styles/ui/button.module.scss';
import { useEffect, useState } from "react";
const Button: React.FC<ButtonProps> = ({
  children,
  type,
}) => {
  const [style, setStyle] = useState<any>()
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
      className={`
        ${styles.container}
        ${style} 
        flex
        justify-center
        items-center
        rounded-md
        font-bold
        min-w-[48px]
        md:min-w-[141px]
      `}
    >
      {children}
    </button>
  )
};

export default Button