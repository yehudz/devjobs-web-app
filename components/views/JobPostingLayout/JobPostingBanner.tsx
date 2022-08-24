import type { JobPostingBannerProps } from "../../../typings/common.interfaces"
import Button from "../../ui/Button"
import Icon from "./Icon"
const JobPostingBanner: 
React.FC<JobPostingBannerProps> = ({
  color,
  icon,
  company,
  website,
  websiteName,
})=> {
  return(
    <div 
    className="
      flex
      items-center
      flex-col
      justify-center
      md:flex-row
      relative
      h-[230px]
      w-full
      max-w-[90%]
      xl:max-w-[1100px]
      mx-auto
      pt-[26px]
      mt-[-40px]
      z-50
    "
    >
      <Icon 
        image={icon}
        color={color}
        company={company}
      />
      <div 
        className=" 
          flex
          flex-col
          justify-center
          items-center
          wrapper
          bg-white
          dark:bg-very-dark-blue
          rounded-lg
          h-full
          w-full
          pt-6
        "
      >
        <h3>{company}</h3>
        <div 
          className="
            body
            text-dark-gray
            mt-2
            mb-6
          "
        >
          <a href={website}>
            {websiteName}
          </a>
        </div>
        <Button
          type="secondary"
        >
          Company Site
        </Button>
      </div>
    </div>
  )
}

export default JobPostingBanner