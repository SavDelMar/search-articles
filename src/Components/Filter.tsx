import React, { FC } from 'react'
interface filterProps {
    getArticles: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchArticles: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Filter: FC<filterProps> = ({getArticles, searchArticles}) => {
    return (
        <div>
          <form>
            <input onChange={getArticles} type='text'></input>
            <button onClick={searchArticles} >Search</button>    
          </form>  
        </div>
    )
}

export default Filter
