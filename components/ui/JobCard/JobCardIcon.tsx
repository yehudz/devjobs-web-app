import { JobCardIconProps } from "../../../typings/common.interfaces"

const JobCardIcon: React.FC<JobCardIconProps> = ({
  image,
  color,
  company
})=> {
  return(
    <div
      data-testid="job-card-icon-container"
      className="
        flex
        justify-center
        items-center
        absolute
        top-0
        left-[50%]
        translate-x-[-50%]
        w-[50px]
        h-[50px]
        rounded-[14px]
        z-50
      "
      style={{backgroundColor: color}}
    >
      <img src={image} alt={company} />
    </div>
  )
}

export default JobCardIcon