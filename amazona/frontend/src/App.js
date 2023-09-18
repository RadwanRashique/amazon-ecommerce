import React from 'react'
import data from './data'


function App() {
  return (
    <div >
<header>
  <a href='/'>amazona</a>
</header>

    <main>
    <h1>Featured product</h1>
    <div className='products'>
    {data.products.map(product=>(
      <div key={product.No} className='product'>
      
        <img src={product.image} alt={product.name}  />
      <div className='product-info'>

        <p>{product.name}</p>
        <p>{product.price}</p>
        </div>
      </div>
    ))}
    </div>
    </main>
    </div>
  )
}

export default App