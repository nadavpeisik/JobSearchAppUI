import JobListing from './JobListing'

const JobListings = ({ jobListings, onDelete, onToggle }) => {
    return (
        <>
            {jobListings.map((jobListing) => (
                <JobListing key={jobListing.link} jobListing={jobListing}
                onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default JobListings