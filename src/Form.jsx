import React, { useState } from 'react';

function Form(props) {
  const [gifTitle, setGifTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(gifTitle)
    setGifTitle('')
  };

  const handleChange = e => {
    const title= e.target.value
    setGifTitle(title)
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
      </form>
    </>
  );
}

export default Form;
