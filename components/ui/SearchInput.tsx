import { InputProps } from "../../typings/common.types";
import searchContext from "../../context/searchContext";
import { useContext } from "react";
const SearchInput: React.FC<InputProps> = ({
  placeholder,
  icon,
  isMobile,
  isSearch
}) => {
  const {
      searchQuery, 
      setSearchQuery,
      filterByLocation,
      setFilterByLocation
  } = useContext(searchContext)

  function updateQuery(e: 
    React.ChangeEvent<HTMLInputElement>
  ): void {
    let query = e.target.value
    if (isSearch) setSearchQuery(query)
    if (!isSearch) setFilterByLocation(query)
  }

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
        value={isSearch ? searchQuery: filterByLocation}
        onChange={updateQuery}
      />
    </div>
  )
};

export default SearchInput