import React from 'react'

 function Gif ({ gif }){
  console.log("GIF IS HERE", gif)
  return(
    <div>
      <img src={gif.data.results.thumbnail} alt="searched Gif" />
    </div>
  )
}

export default Gif 