import type { JobPost } from "../../../typings/common.types"
import Link from "next/link"
import Button from "../../ui/Button"
const JobPostingFooter:
React.FC<JobPost> = ({
  job
})=> {
  return(
    <footer
        data-testid="content-footer"
        className="
          flex
          justify-center
          w-full
          bg-white
          mt-16
        "
      >
        <div 
          className="
            wrapper
            flex
            justify-between
            w-full
            max-w-[90%]
            xl:max-w-[1100px]
            items-center
            py-6
          "
        >
          <div 
            className="
              flex
              flex-col
              hidden
              md:flex
            "
          >
            <h3>{job.position}</h3>
            <div className="body">
              {job.company}
            </div>
          </div>
          <Link href={job.website}>
            <a
              data-testid="apply-button"
              className="
                w-full
                md:w-auto
              "
            >
              <Button
                type='primary'
              >
                Apply Now
              </Button>
            </a>
          </Link>
        </div>
      </footer>
  )
}

export default JobPostingFooter