import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api' 
import PlaceHolderContainer from '../ui/PlaceHolderContainer'


const HomePage = () => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  useEffect(function() {
    setLoading(true)
    api.get("products")
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
      });
  }, [])

  return (
    <>
      <Header />
      {loading ? <PlaceHolderContainer /> : <CardContainer products={products} />}
    </>
  )
}

export default HomePage