import { useState, useEffect } from 'react'
import Header from './components/Header'
import JobListings from './components/JobListings'
import SearchJobListing from './components/SearchJobListing'
import SavedJobListings from './components/SavedJobListings'
import PropTypes from 'prop-types'



const App = () => {
  
  const [savedJobListings, setSavedJobListings] = useState([])
  const [jobListings, setJobListings] = useState([]) 
   
  // const [isLinkedIn, setIsLinkedIn] = useState(false)
  // const [isGotFriends, setIsGotFriends] = useState(false)
  // const [isEthosia, setIsEthosia] = useState(false)
  // const [keyword, setKeyword] = useState('')

  // useEffect(() => {
  //   const getJobListings = async () => {
  //     const jobListingsFromServer = await fetchJobListings()
  //     setJobListings(jobListingsFromServer)
  //   }
  //   getJobListings()
  // }, [])

  useEffect(() => {
    const getSavedJobListings = async () => {
      const savedJobListingsFromServer = await fetchJobListingsFromDb()
      setSavedJobListings(savedJobListingsFromServer)
      console.log(savedJobListingsFromServer)
      console.log(savedJobListings)
    }
    getSavedJobListings()
  }, [])

  // Fetch job listing from database
  const fetchJobListingsFromDb = async() => {
    const res = await fetch('http://localhost:8080/joblistings')
    const data = await res.json()

    return data
  }

  // Find new job listings from scrapers
  const SearchNewJobs = async({keyword, sites}) => {
    const res = await fetch(`http://localhost:8080/joblistings/new/${sites}/${keyword}`)
    const data = await res.json()

    setJobListings(data)
  }

  // Delete job listing
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
      ('') }

      {savedJobListings.length > 0 ? 
      (<SavedJobListings savedJobListings={savedJobListings} />) :
      ('DB is empty') } 

      
    </div>
  );
}

export default App;

// App.propTypes = {
//   savedJobListings : PropTypes.array
// }

