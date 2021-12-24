import { Skeleton} from '@mui/material'
import React from 'react'
import ContentLoader from 'react-content-loader'

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
        
        

      {/* <ContentLoader
        speed={3}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="3" y="211" rx="0" ry="0" width="234" height="20" /> 
        <rect x="6" y="246" rx="0" ry="0" width="231" height="71" /> 
        <rect x="12" y="328" rx="0" ry="0" width="69" height="20" /> 
        <rect x="88" y="11" rx="0" ry="0" width="60" height="173" />
      </ContentLoader> */}
    </div>
      
    )
}

export default ArticleLoading
