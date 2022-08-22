import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from '../components/ui/Button'

const Home: NextPage = (props) => {
  return(
    <>
      <Button
        type="primary"
      >
        Button 1
      </Button>
      <Button
        type="secondary"
      >
        Button 2
      </Button>
      <Button
        type="dark"
      >
        Button 2 dark
      </Button>
    </>
  )
}

export default Home
