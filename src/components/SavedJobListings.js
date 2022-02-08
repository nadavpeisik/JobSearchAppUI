import SavedJobListing from './SavedJobListing'

const SavedJobListings = ( {savedJobListings} ) => {
    return (
        <>
            <h2>Saved Jobs</h2>
            {savedJobListings.map((savedJobListing) => (
                <SavedJobListing key={savedJobListing.link} savedJobListing={savedJobListing} />
            ))}
        </>
    )
}

export default SavedJobListings