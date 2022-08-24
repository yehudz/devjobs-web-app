import type { JobCardIcon } from "../../../typings/common.types"

const Icon: React.FC<JobCardIcon> = ({
  image,
  color,
  company
})=> {
  return(
    <div
      className="
        flex
        justify-center
        items-center
        absolute
        top-0
        left-[50%]
        translate-x-[-50%]
        md:left-0
        md:translate-x-0
        w-[50px]
        h-[50px]
        md:h-full
        md:w-[140px]
        rounded-[14px]
        md:rounded-none
        md:rounded-bl-lg
        z-50
      "
      style={{backgroundColor: color}}
    >
      <img 
        className="
          md:w-full
          md:p-7
        "
        src={image} 
        alt={company} 
      />
    </div>
  )
}

export default Icon