import React from "react"

function Header({number,user}) {
  return (
    <div>
        <h1>Header - {number}</h1>
        <br/><br/>
        {JSON.stringify(user)}
        {console.log('Header Component')}
    </div>
  )
}

export default React.memo(Header)