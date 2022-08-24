import { FilterPopupProps } from "../../../typings/common.interfaces";

const MobileFilterBtn: React.FC<FilterPopupProps> = ({
  open,
  setOpen
})=> {
  return(
    <div 
      data-testid="filter-button"
      className="
        filter-btn
        md:hidden
        cursor-pointer
      "
      onClick={()=> setOpen(open = !open)}
    >
      <img 
        src="/assets/mobile/icon-filter.svg" 
        alt="Filter" 
      />
    </div>
  )
}

export default MobileFilterBtn