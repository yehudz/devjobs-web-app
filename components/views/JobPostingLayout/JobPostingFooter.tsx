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
          w-full
          bg-white
          mt-16
          p-6
        "
      >
        <Link href={job.website}>
          <a
            data-testid="apply-button"
          >
            <Button
              type='primary'
            >
              Apply Now
            </Button>
          </a>
        </Link>
      </footer>
  )
}

export default JobPostingFooter