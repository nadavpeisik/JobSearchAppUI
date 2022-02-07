import PropTypes from 'prop-types'


const Header = ({ title }) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Job Search App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header