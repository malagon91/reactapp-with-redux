import React from 'react'
import {connect} from 'react-redux'
const Message =(props) => (
    props.message ? <span className='message'>{props.message}</span> :null
)

export default connect (
    (state) => ({message:state.message})
)(Message)