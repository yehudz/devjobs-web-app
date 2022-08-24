import type { NextPage } from 'next'
import PostingsContainer from '../components/views/PostingsContainer'
import data from './data.json'
import { JobPosting, JobCardIcon, JobCardInfo } from '../typings/common.types'
import JobCard from '../components/ui/JobCard/JobCard'
import { useContext, useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import searchContext from '../context/searchContext'
import SecondaryTopBar from "../components/ui/SecondaryTopBar"

import Link from 'next/link'
const Home: NextPage = (props) => {
  const [jobPosts, setJobPosts] = useState(props.jobs)
  const [limit, setLimit] = useState<number>(12)
  const {
    searchQuery,
    filterByLocation,
    fullTimeFilter,
    searching
  } = useContext(searchContext)
  // Shows all data if filtering
  useEffect(()=> {
    if (
      searchQuery !== '' ||
      filterByLocation !== '' ||
      fullTimeFilter !== false
     ) setLimit(data.length)
     else setLimit(limit)
  }, [searchQuery, filterByLocation, fullTimeFilter])

  // Sets the filtered data
  useEffect(()=> {
    const includeColumns = [
      'position',
      'company'
    ]
    if (searching) {
      let filteredData = data.filter(
        (jobPost: any)=> {
          return Object.keys(jobPost).some(
            (key)=> {
              return includeColumns.includes(key) ?
              jobPost[key]
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) : 
              false
            }
          )
        }
      ).filter(jobPost=> 
        jobPost.location
        .toLowerCase()
        .includes(filterByLocation.toLowerCase())
      ).filter(jobPost=> 
         {
          if (fullTimeFilter === 
            (jobPost.contract === 'Full Time'))
            return jobPost
          else if (!fullTimeFilter)
            return jobPost
         }
      )
      setJobPosts(filteredData)
    }
  }, [searching])

  return(
    <div 
      className="
        main
        h-full
        w-full
        bg-light-grey
        dark:bg-midnight 
      "
    >
      <SecondaryTopBar />

      <PostingsContainer>
        {jobPosts.slice(0, limit)
        .map((jobPosting)=> {
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
            <Link 
              href={`/jobs/${jobPosting.id}`}
              key={jobPosting.id} 
            >
              <a 
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
                <JobCard
                  icon={icon}
                  info={info}
                />
              </a>
            </Link>
          )
        })}

      </PostingsContainer>
      <div 
        onClick={()=> setLimit(20)}
        className="
          flex
          justify-center
          button-container
          py-8
        "
      >
        {!searchQuery && 
          <Button 
            type="primary"
          >
            Load More
          </Button>
        }
      </div>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // import data from './data.json'
  const jobs  = data

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      jobs,
    },
  }
}

export default Home
