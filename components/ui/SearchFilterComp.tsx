import Button from "./Button"
import SearchInput from "./SearchInput"

const SearchFilterComp: React.FC = ()=> {
  return(
    <div 
      className="
        flex
        items-center
        justify-between
        w-full
      "
    >
      <div 
        className="
          search
        "
      >
        <SearchInput 
          placeholder="Filter by title, companies, expertise..."
          icon="assets/desktop/icon-search.svg"
        />
      </div>
      <div 
        className="
          filter
          hidden
          md:block
        "
      >
        <SearchInput 
          placeholder="Filter by title, companies, expertise..."
          icon="assets/mobile/icon-filter.svg"
        />
      </div>
      <div 
        className="
          right-container
          flex
          flex-row
          items-center
          gap-5
        "
      >
        <div 
          className="
            filter-btn
            md:hidden
            cursor-pointer
          "
        >
          <img 
            src="assets/mobile/icon-filter.svg" 
            alt="Filter" 
          />
        </div>
        <Button 
          type="primary"
        >
          <img 
            className="search-icon w-5"
            src="assets/desktop/icon-search.svg" 
            alt="Search button" 
          />
        </Button>
      </div>
    </div>
  )
}

export default SearchFilterComp