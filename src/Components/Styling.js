import React from 'react'
import './Styling.css'
import Styles from './demo.module.css'

function Styling(){

    const headStyle = {
        color : 'Yellow',
        backgroundColor : 'brown'
    }
    return(
        <div>
            {/* Direct style attribute : */}
            <h1 style = {{backgroundColor : 'violet' , color : 'red'}}>Learning Cascating Style Sheet</h1>
            {/* Inline or Variable Name Style : */}
            <h1 style={headStyle}>Learn About CSS</h1>
            {/* External Stylesheet ; */}
            <h1 className="styletest">React CSS.Style</h1>
            {/* Css Modules : */}
            <h1 className={Styles.heading}>React CSS Modules</h1>
        </div>
    )
}
export default Styling

