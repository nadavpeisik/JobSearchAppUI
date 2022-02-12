import Button from './Button'


const SavedJobListing = ({ savedJobListing }) => {
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
                <a href={savedJobListing.link}>{savedJobListing.siteName}</a>
                <Button text={'Delete'} bgColor={'#6d7b99'} 
                jobListing={savedJobListing} />
            </div>

            
        </div>
    )
}

export default SavedJobListing