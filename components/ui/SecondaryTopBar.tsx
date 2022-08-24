import SearchFilterComp from "./SearchFilterComp/SearchFilterComp"

const SecondaryTopBar: React.FC = ()=> {
  return(
    <div
      data-testid="secondary-top-bar-container"
      className="
        flex
        items-center
        relative
        h-[80px]
        w-full
        max-w-[90%]
        xl:max-w-[1110px]
        mx-auto
        px-3
        mt-[-40px]
        bg-white
        dark:bg-very-dark-blue
        rounded-lg
      "
    >
      <SearchFilterComp />
    </div>
  )
}

export default SecondaryTopBar