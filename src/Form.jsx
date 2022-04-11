import React, { useState } from 'react';


function Form(props) {
  const [gifTitle, setGifTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(gifTitle)
    setGifTitle('')
  };
  const handleChange = e => {
    const title = e.target.value
    setGifTitle(title)
  };
  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="gifTitle"
          type="text"
          value={gifTitle}
          onChange={handleChange}
        />
        <input type="submit" value="Find Gif Info" />
        <button onClick={refreshPage}> Make API call again
        </button>
      </form>
    </>
  )
}


export default Form;
