import React from 'react'

const GenreCamp = ({selected, onChange}) => {


  const handleCheckBoxClick = (event) => {
    const {checked, name} = event.target;

    if (checked) {
        onChange([...selected,name]);
    } else {
        onChange([...selected.filter(selectedName => selectedName !== name)])
    }
  }
  

  return (
    <>
        <label className='genre-ground'>
            <input 
                type='checkbox'
                checked={selected.includes('Action')}
                name='Action'
                onChange={handleCheckBoxClick}
            />
            <span>Action</span>
        </label>
        <label className='genre-ground'>
            <input 
                type='checkbox'
                checked={selected.includes('Adventure')}
                name='Adventure'
                onChange={handleCheckBoxClick}
            />
            <span>Adventure</span>
        </label>
        <label className='genre-ground'>
            <input 
                type='checkbox'
                checked={selected.includes('Comedy')}
                name='Comedy'
                onChange={handleCheckBoxClick}
            />
            <span>Comedy</span>
        </label>
        <label className='genre-ground'>
            <input 
                type='checkbox'
                checked={selected.includes('Romance')}
                name='Romance'
                onChange={handleCheckBoxClick}
            />
            <span>Romance</span>
        </label>
    </>
  )
}

export default GenreCamp