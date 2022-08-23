const MobileFilterBtn: React.FC = ()=> {
  return(
    <div 
      data-testid="filter-button"
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
  )
}

export default MobileFilterBtn