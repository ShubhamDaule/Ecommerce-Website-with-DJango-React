import React from 'react'
import PlaceHolder from './PlaceHolder'

const PlaceHolderContainer = () => {
  const placeNumber = [...Array(12).keys()].slice(0);

  return (
    <section className="py-5" id="shop">
    <h4 style={{ textAlign: "center" }}>Our Products</h4>
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row justify-content-center">
        {placeNumber.map(num => (<PlaceHolder key={num} />))}
      </div>
    </div>
  </section>  
  )
}

export default PlaceHolderContainer