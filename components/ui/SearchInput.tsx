import { InputProps } from "../../typings/common.types";
const SearchInput: React.FC<InputProps> = ({
  placeholder,
  icon
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
        className="
          hidden
          md:block
        "
      />
      <input 
        className="
          focus:outline-none
          ml-4
          w-full
          bg-transparent
          placeholder-gray
          font-light
          dark:placeholder-light-grey
          truncate
        "
        placeholder={placeholder}
      />
    </div>
  )
};

export default SearchInput