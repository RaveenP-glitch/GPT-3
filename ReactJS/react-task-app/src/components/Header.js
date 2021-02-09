import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header class='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello'/>
            <Button color='blue' text='Hello1'/>
            <Button color='red' text='Hello2'/>

        </header>
       
    )
}

Header.defaultProps = {
    title: 'Task Tracker',

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
