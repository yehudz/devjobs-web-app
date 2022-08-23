import Button from "./Button"
import CheckboxComponent from "./Checkbox"
import SearchInput from "./SearchInput"

const SearchFilterComp: React.FC = ()=> {
  return(
    <div 
      className="
        flex
        items-center
        justify-between
        w-full
        h-full
      "
    >
      <div 
        className="
          flex
          items-center
          h-full
          lg:flex-[4_4-0%]
          md:w-full
          md:border-r-2
          md:border-light-grey
          md:px-4
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
          w-full
          h-full
          hidden
          items-center
          md:flex
          lg:flex-[2_2-0%]
          md:border-r-2
          md:border-light-grey
          px-5
        "
      >
        <SearchInput 
          placeholder="Filter by location..."
          icon="assets/desktop/icon-location.svg"
        />
      </div>
      <div 
        className="
          search-full-time
          flex
          flex-row
          items-center
          w-full
          hidden
          md:flex
          lg:flex-[2_2-0%]
          px-5
        "
      >
        <CheckboxComponent />
        <h5
          className="
            font-bold
            ml-5
          "
        >Full time</h5>
      </div>
      <div 
        className="
          right-container
          flex
          flex-row
          items-center
          gap-5
          z-50
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
            className="
              search-icon w-5
              md:hidden
            "
            src="assets/desktop/icon-search.svg" 
            alt="Search button" 
          />
          <p
            className="
              hidden
              md:block
              text-body
            "
          >
            Search
          </p>
        </Button>
      </div>
    </div>
  )
}

export default SearchFilterComp