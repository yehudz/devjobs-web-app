import { JobPost } from '../../typings/common.types'
import data from '../data.json'

const JobPostPage = (props: JobPost)=> {
  return(
    <h1
      className='
        text-midnight
      '
    >{props.job.position}</h1>
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