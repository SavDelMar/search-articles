import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { setKeywordAction } from '../redux/beersAction';

const Search: FC = () => {
    let dispatch = useDispatch();

    let setKey = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      dispatch(setKeywordAction(e.target.value));
      console.log(e.target.value)
  }


      
    return (
        <div className='search'>
            <input id='search' onChange={setKey} type='text'></input>
        </div>
    )
}

export default Search;
