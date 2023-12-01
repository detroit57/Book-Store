import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import Header from '../layouts/Header'
import AboutDetails from '../layouts/AboutDetails'
import Card from '../components/Card'

const Dashboard = () => {
  return (
    <Box px={10}py={5}>
      <Header />
      <AboutDetails />
      <Grid py={10} className='grid' gridGap={10}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  )
}

export default Dashboard