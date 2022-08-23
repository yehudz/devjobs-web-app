import { JobCardProps } from "../../../typings/common.interfaces"
import JobCardIcon from "./JobCardIcon"
import JobCardInfo from "./JobCardInfo"

const JobCard: React.FC<JobCardProps> = ({
  icon,
  info,
})=> {
  return(
    <div 
      className="
        container
        relative
        pt-6
        max-w-[90%]
        mt-7
        md:max-w-[44%]
        lg:max-w-[32%]
      "
    >
      <JobCardIcon 
          image={icon.image}
          color={icon.color}
          company={icon.company}
        />
      <div 
        className="
          wrapper
          relative
          bg-white
          dark:bg-very-dark-blue
          rounded-md
          py-9
          px-8
        "
      >
        <JobCardInfo 
          postedAt={info.postedAt}
          contract={info.contract}
          position={info.position}
          company={info.company}
          location={info.location}
        />
      </div>
    </div>
  )
}

export default JobCard