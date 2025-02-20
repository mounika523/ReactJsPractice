import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './ClassComponents/classComponent'
import FunctionalComponent from './FunctionalComponent/FunctionalComponent'
import ProductList from './components/products'

function App() {
  const dummyProducts=["Product 1", "Product 2", "Product 3"];

  return (
    <>
      <div>
        <h1>React Js Concepts</h1>
        {/*<ClassComponent/>
        <FunctionalComponent/>*/}
        <ProductList name = "Mou" city = "hyd" dummyProducts={dummyProducts}/>
      </div>
      
    </>
  )
}

export default App
