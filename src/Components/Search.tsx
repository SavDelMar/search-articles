import { TextField } from '@mui/material';
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setKeywordAction } from '../redux/beersAction';
import { AppState } from '../redux/rootReducer';



const Search: FC = () => {
    const keyWord: string = useSelector((state: AppState) => state.keyword.keyword);
    let dispatch = useDispatch();
    let setKey = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      dispatch(setKeywordAction(e.target.value));
    }

      
    return (
        <div className='search'>
            <TextField
                style={{
                    color: 'black',
                    backgroundColor: 'white',
                    width: '100%',
                    padding: '0px 5px'
                }}     
            onChange={setKey}
            value={keyWord}
            id="standard-search"
            type="search"
            variant="standard"
            />
        </div>
    )
}

export default Search;
