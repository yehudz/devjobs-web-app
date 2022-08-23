import type { NextPage } from 'next'
import PostingsContainer from '../components/views/PostingsContainer'
import data from './data.json'
import { JobPosting, JobCardIcon, JobCardInfo } from '../typings/common.types'
import JobCard from '../components/ui/JobCard/JobCard'
const Home: NextPage = (props) => {
  return(
    <div 
      className="
        main
        h-screen
        w-full
        bg-light-grey
        dark:bg-midnight 
      "
    >
      <PostingsContainer>
        {data.map((jobPosting)=> {
          let icon: JobCardIcon = {
            image: jobPosting.logo,
            color: jobPosting.logoBackground,
            company: jobPosting.company
          
          }
          let info: JobCardInfo = {
            postedAt: jobPosting.postedAt,
            contract: jobPosting.contract,
            position: jobPosting.position,
            company: jobPosting.company,
            location: jobPosting.location
          }
          return(
            <JobCard 
              icon={icon}
              info={info}
            />
          )
        })}

      </PostingsContainer>
    </div>
  )
}

export default Home
