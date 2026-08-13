import React, { useState, useEffect } from 'react'

const SearchBar = () => {

    let [search, setSearch] = useState("")
    let [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    async function getData() {
        let res = await fetch('https://dummyjson.com/recipes/search?q=' + search)
        let data = await res.json()
        setResults(data.recipes)
    }

    useEffect(() => {
        getData()
    }, [search])

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className="search-container">
            <h3>Search bar</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={()=>setShowResults(true)}
                    onBlur={()=>setShowResults(false)}
                />
            </form>
            <div className='results'>
                {
                    showResults && results.map((recepe)=>{
                        return <div>{recepe.name}</div>
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar