const express = require("express");
const app = express();
const react = require('react')
const ReactDOM = require('react-dom')

const [currentPage, setCurrentPage] = react.useState(1);

app.listen(8000, () => {
    if (localStorage.getItem('pokemon') == null)
    axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
        .then(res => res.data)
        .then(res => {
            localStorage.setItem('pokemon', res)
        })
        .catch(err => console.log("err", err))
    
})

app.get('/index', ()=> {
    page()
})

function page() {
    const last = currentPage * 10;
    const first = last - 10;
    const numPage = Math.ceil(localStorage.getItem('pokemon').length / 10);
    ReactDOM.render(
            <div>
                <h1>Page: {currentPage}</h1>
                <div>
                    {
                        localStorage.getItem('pokemon').slice(first, last).map(pokemon => {
                            <p>{pokemon.name.english} </p>
                        })
                    }
                </div>
                <div>
                    {pagination(numPage)}
                </div>
            </div>

    , document.getElementById('root'));
}

function pagination(numPage) {
    const pages = []
    for(x = 1; x < numPage + 1; x++) {
        pages.push(x)
    }

    let next = () => {
        if(currentPage != numPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    let prev = () => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return(
        <div>
            <button onClick={prev}></button>
            {pages.map(page => {
                <button onClick={() => setCurrentPage(page)}>{number}</button>
            })}
            <button onClick={next}></button>
        </div>
    )
    
}