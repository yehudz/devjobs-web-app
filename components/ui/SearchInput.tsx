import { InputProps } from "../../typings/common.types";
const SearchInput: React.FC<InputProps> = ({
  placeholder,
  icon
}) => {
  
  return(
    <div className="
        flex
        items-center
        h-[48px]
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
          dark:placeholder-light-grey
        "
        placeholder={placeholder}
      />
    </div>
  )
};

export default SearchInput