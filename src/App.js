import { useState, useEffect } from 'react'
import Header from './components/Header'
import JobListings from './components/JobListings'
import SearchJobListing from './components/SearchJobListing'


const App = () => {
  // const formState = {
  //   linkedin: [isLinkedIn, setIsLinkedIn] = useState(false),
  //   gotfriends: [isGotFriends, setIsGotFriends] = useState(false),
  //   ethosia: [isEthosia, setIsEthosia] = useState(false),
  //   kw: [keyword, setKeyword] = useState('')
  // }
  const [jobListings, setJobListings] = useState([]) 
  // const [isLinkedIn, setIsLinkedIn] = useState(false)
  // const [isGotFriends, setIsGotFriends] = useState(false)
  // const [isEthosia, setIsEthosia] = useState(false)
  // const [keyword, setKeyword] = useState('')

  // const queryInfo = {SearchJobListing.useState.}
  // const kek = () => {
  //   console.log(SearchJobListing.useState.keyword)
  // }

  // useEffect(() => {
  //   const getJobListings = async () => {
  //     const jobListingsFromServer = await fetchJobListings()
  //     setJobListings(jobListingsFromServer)
  //   }
  //   getJobListings()
  // }, [])

  // useEffect(() => {
  //   const getJobListings = async () => {
  //     const jobListingsFromServer = await fetchJobListings()
  //     setJobListings(jobListingsFromServer)
  //   }
  //   getJobListings()
  // }, [])

  // Fetch job listing from database
  // const fetchJobListings = async() => {
  //   const res = await fetch('http://localhost:8080/joblistings')
  //   const data = await res.json()

  //   return data
  // }

  // Find new job listings from scrapers
  const SearchNewJobs = async({keyword, sites}) => {
    const res = await fetch(`http://localhost:8080/joblistings/new/${sites}/${keyword}`)
    const data = await res.json()

    setJobListings(data)
  }

  // Delete Job Listing
  const deleteJobListing = async (link) => {
    setJobListings(jobListings.filter((jobListing) => jobListing.link !== link))
  }
  
  // const getJobListings = async () => {
  //   const jobListingsFromServer = await fetchJobListings()
  //   setJobListings(jobListingsFromServer)
  // }

  // const SearchNewJobs = (keyword, siteString) => {
  //   console.log(keyword + " " + siteString)
  // }

  

  // // Toggle apply
  // const toggleApply = (link) => {
  //   setJobListings(jobListings.map((jobListing) => jobListing.link === link ?
  //   {} : link))
  // }

  return (
    <div className="container">
      <Header />
      <SearchJobListing findNewJobs={SearchNewJobs} />
      
      
      {jobListings.length > 0 ? 
      (<JobListings jobListings={jobListings} onDelete={deleteJobListing}/>) :
      ('Nothing to show') }

      
    </div>
  );
}

export default App;

