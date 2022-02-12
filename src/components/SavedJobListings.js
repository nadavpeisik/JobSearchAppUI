import SavedJobListing from './SavedJobListing'

const SavedJobListings = ( {savedJobListings} ) => {
    return (
        <>
            <h2 style={{textAlign: 'center'}}>Saved Jobs</h2>
            <br></br>
            {savedJobListings.map((savedJobListing) => (
                <SavedJobListing key={savedJobListing.link} savedJobListing={savedJobListing} />
            ))}
        </>
    )
}

export default SavedJobListings