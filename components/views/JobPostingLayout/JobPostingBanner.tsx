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
      md:h-[140px]
      w-full
      max-w-[90%]
      xl:max-w-[1100px]
      mx-auto
      pt-[26px]
      md:pt-0
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
          md:flex-row
          justify-center
          md:justify-between
          md:pl-[180px]
          md:pr-[40px]
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
        <div
          className="
            flex
            flex-col
            justify-center
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
        </div>
        <div
        className="
            md:mb-7
          "
        >
          <Button
            type="secondary"
          >
            Company Site
          </Button>
      </div>
      </div>
    </div>
  )
}

export default JobPostingBanner