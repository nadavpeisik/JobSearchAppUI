import Button from './Button'


const SavedJobListing = ({ savedJobListing, onDelete }) => {
    return (
        <div className='savedjoblisting'
        style={{border: 'thin solid black', background: '#c6d0e5'}}
        >
            <h3 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {savedJobListing.jobTitle}{' '}
            </h3>
            <h4>{savedJobListing.companyName}</h4>

            <div 
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a href={savedJobListing.link} target="_blank" rel="noopener noreferrer">
                    {savedJobListing.siteName}
                </a>
                <Button text={'Delete'} bgColor={'#6d7b99'} onClick={onDelete}
                jobListing={savedJobListing} />

            </div>

            
        </div>
    )
}

export default SavedJobListing