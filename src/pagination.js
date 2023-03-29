
import React from "react"

function pagination({currentPage, setCurrentPage, numPage}) {
    const pages = []
    for(let x = 1; x < numPage + 1; x++) {
        pages.push(x)
    }
  
    let next = () => {
        if(currentPage !== numPage) {
            setCurrentPage(currentPage + 1)
        }
    }
  
    let prev = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
  
    return(
        <div>
            {(currentPage !== 1) && (<button onClick={prev}>prev </button>)}
            {pages.map(page => {
                return <button onClick={() => setCurrentPage(page) } className={(page === currentPage) ? 'active' : ''}>{page}</button>
            })}
                 {(currentPage !== numPage) && <button onClick={next}>next</button>}
        </div>
    )
    
  }
  
  export default pagination