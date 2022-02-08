// import Button from './Button'
// import { useState } from 'react'

const SearchJobListing = ({ isLinkedIn, setIsLinkedIn,
    isGotFriends, setIsGotFriends, isEthosia, setIsEthosia,
    keyword, setKeyword }) => {
    // const [isLinkedIn, setIsLinkedIn] = useState(false)
    // const [isGotFriends, setIsGotFriends] = useState(false)
    // const [isEthosia, setIsEthosia] = useState(false)
    // const [keyword, setKeyword] = useState('')
    
    const parseSites = (sites=[isLinkedIn, isGotFriends, isEthosia]) => {
        const siteString = ["linkedin", "gotfriends", "ethosia"]
        return siteString.filter((site, index) => sites[index]).join(",")
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!keyword) {
            alert("Please add a keyword")
            return
        }

        const siteString = parseSites([isLinkedIn, isGotFriends, isEthosia])
        console.log(siteString)

        //SearchNewJobs({ keyword, siteString })

        setKeyword('')
        setIsLinkedIn(false)
        setIsGotFriends(false)
        setIsEthosia(false)

    }
    

    return (
        <form className='find-form' onSubmit={onSubmit}>
            <div className='form-control' 
            style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}
            >
                <label>Keyword:</label>
                <input type='text' placeholder='Type a keyword' value={keyword} 
                onChange={(e) => {setKeyword(e.target.value)}} />
                <input type='submit' value='Find new jobs' className='btn btn-block'
                style={{background: '#2fbfdf'}} />
            </div >

            <div className='form-control form-control-check' >
                <input
                    type='checkbox' 
                    value={isLinkedIn}
                    checked={isLinkedIn}
                    onChange={(e) => setIsLinkedIn(e.currentTarget.checked)}
                />
                <label>LinkedIn</label>
                <input
                    type='checkbox'
                    value={isGotFriends}
                    checked={isGotFriends}
                    onChange={(e) => setIsGotFriends(e.currentTarget.checked)}
                />
                <label>GotFriends</label>
                <input
                    type='checkbox'
                    value={isEthosia}
                    checked={isEthosia}
                    onChange={(e) => setIsEthosia(e.currentTarget.checked)}
                />
                <label>Ethosia</label>
            </div>

        </form >

    )
}

export default SearchJobListing