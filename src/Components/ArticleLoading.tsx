import { Skeleton } from '@mui/material';
import React from 'react';

function ArticleLoading() {
    return (
      <div style={{ width: '30%', height: 'auto', margin: '5px' }}>
        <div style={{ width: '30%', height: '50%', margin: '5px auto' }}>
            <Skeleton height={300} />
        </div>
        <div style={{ width: '100%', height: '30px', margin: '5px' }}>
            <Skeleton height={30} />
        </div>
        <div style={{ width: '100%', height: '30px', margin: '5px' }}>
            <Skeleton height={30} />
        </div>
        <div style={{ width: '100%', height: '90px', margin: '5px' }}>
          <Skeleton height={90}/>
        </div>
        <div style={{ width: '30%', height: '30px', margin: '5px' }}>
          <Skeleton height={30}/>
        </div>
    </div>
      
    )
}

export default ArticleLoading
