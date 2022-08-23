import { InputProps } from "../../typings/common.types";
const SearchInput: React.FC<InputProps> = ({
  placeholder,
  icon,
  isMobile
}) => {
  
  return(
    <div
      data-testid="search-bar-container" 
      className="
        flex
        items-center
        h-[48px]
        w-full
      "
    >
      <img 
        src={icon} 
        alt="Search Input" 
        className={`
          ${!isMobile ? 'hidden': ''}
          md:block
        `}
      />
      <input 
        className="
          focus:outline-none
          ml-4
          w-full
          placeholder-gray
          font-light
          dark:placeholder-light-grey
          truncate
        "
        placeholder={placeholder}
        style={{background: 'transparent'}}
      />
    </div>
  )
};

export default SearchInput