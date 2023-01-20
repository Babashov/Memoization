import React from "react"

function Header({increment}) {
  return (
    <div>
        <h1>Header</h1>
        <br/><br/>
        <button onClick={()=>increment()}>Click</button>
        {console.log('Header Component')}
    </div>
  )
}

export default React.memo(Header)