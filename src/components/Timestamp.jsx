//=======================| import |=======================//

import React from 'react'

//=======================| function |=======================//

function Timestamp(props) {
    const {timestamp} = props
    console.log(props)
  return (
    <span className="timestamp">{timestamp}</span>
  )
}

//=======================| export |=======================//

export default Timestamp