import React, { FC } from 'react'
interface filterProps {
    searchArticles: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const Filter: FC<filterProps> = ({searchArticles}) => {

    return (
        <div>
          <form>
            <input id='search' onChange={searchArticles} type='text'></input>
          </form>  
        </div>
    )
}

export default Filter
