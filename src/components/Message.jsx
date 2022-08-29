//=======================| import |=======================//

import React from 'react'

//=======================| function |=======================//

function Message(props) {
    console.log(props)
    const {message} = props;
  return (
    <p className="message">
          {message}
        </p>
  )
}

//=======================| export |=======================//

export default Message