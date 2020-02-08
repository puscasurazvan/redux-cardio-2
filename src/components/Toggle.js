import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleMessage } from '../redux/actions'

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility && 
      <p>You will be seeing this if redux action is toggled</p>
    }
    <button onClick={toggleMessage}>
       Toggle me
    </button>
  </div>
)

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)