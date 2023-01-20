import React from "react"

function Header({number}) {
  return (
    <div>
        <h1>Header - {number}</h1>
        {console.log('Header Component')}
    </div>
  )
}

export default React.memo(Header)