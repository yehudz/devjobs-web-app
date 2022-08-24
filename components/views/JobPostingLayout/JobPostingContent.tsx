import Link from "next/link"
import type { JobPostingContentProps } from "../../../typings/common.interfaces"
import Button from "../../ui/Button"
import JobCardInfo from "../../ui/JobCard/JobCardInfo"
const JobPostingContent: 
React.FC<JobPostingContentProps> = ({
  info,
  contentBody,
  requirementsBody,
  requirementsList,
  tasksBody,
  tasksList,
  website
})=> {
  return(
    <article
      data-testid="page-content"
    >
      <JobCardInfo 
        postedAt={info.postedAt}
        position={info.position}
        location={info.location}
        contract={info.contract}
      />
      <Link href={website}>
        <a
          data-testid="apply-button"
        >
          <Button
            type="primary"
          >
            Apply Now
          </Button>
        </a>
      </Link>
      <p
        data-testid="content-body"
      >
        {contentBody}
      </p>
      <h3
        data-testid="content-requirements-title"
      >
        Requirements
      </h3>
      <p
        data-testid="content-requirements-body"
      >
        {requirementsBody}
      </p>
      <ul
        data-testid="content-requirements-list"
      >
        {requirementsList.map(requirement=>{
          return(
            <li>{requirement}</li>
          )
        })}
      </ul>
      <h3
        data-testid="content-tasks-title"
      >
        What You Will Do
      </h3>
      <p
        data-testid="content-tasks-body"
      >
        {tasksBody}
      </p>
      <ul
        data-testid="content-tasks-list"
      >
        {tasksList.map(task=>{
          return(
            <li>
              {task}
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default JobPostingContent