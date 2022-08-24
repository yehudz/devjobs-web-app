import JobPostingBanner from '../../components/views/JobPostingLayout/JobPostingBanner'
import JobPostingContent from '../../components/views/JobPostingLayout/JobPostingContent'

import { JobPost } from '../../typings/common.types'
import data from '../data.json'
import Link from 'next/link'
import Button from '../../components/ui/Button'
import JobPostingFooter from '../../components/views/JobPostingLayout/JobPostingFooter'
const JobPostPage = (props: JobPost)=> {
  let job = props.job
  let info = {
    postedAt: job.postedAt,
    position: job.position,
    location: job.location,
    company: job.company,
    contract: job.contract
  }
  return(
    <main
      data-testid="content-container"
    >
      <header
        data-testid="content-banner"
      >
        <JobPostingBanner 
          icon={job.logo}
          color={job.logoBackground}
          company={job.company}
          websiteName={job.websiteName}
          website={job.website}
        />
      </header>
      <JobPostingContent 
        info={info}
        website={job.website}
        contentBody={job.description}
        requirementsBody={job.requirements.content}
        requirementsList={job.requirements.items}
        tasksBody={job.role.content}
        tasksList={job.role.items}
      />
      <JobPostingFooter 
        job={job}
      />
    </main>
  )
}

export const getStaticPaths = async ()=> {
  const jobs = data
  const paths = jobs.map(job=> {
    return {
      params: {id: job.id.toString()} 
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (
  context: 
  {params: 
    {id:string}
  })=> {
  const id = context.params.id
  const res = data.find(x => x.id.toString() === id);
  return {
    props: {job: res}
  }
}

export default JobPostPage