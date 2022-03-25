import React from 'react'

import ApiFeed from '../Api/ApiFeed'
import AppFeedCart from '../Components/AppFeedCart';
function FeedScreen() {
    const postApi = async ()=>{
        const result = await ApiFeed.get('/posts'); 
        if(result.ok) return console.log('berhasil',result) ;
      }
postApi();
  return (
    <div>FeedScreen</div>
  )
}

export default FeedScreen