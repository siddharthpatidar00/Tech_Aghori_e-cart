import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://cdn.pixabay.com/photo/2017/09/19/21/35/fashion-2766725_960_720.jpg',
      name: 'Womens cloths',
      category: 'Cloths',
      seller: 'AMZ Seller Ghz',
      price: 1199
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/04/25/20/20/dress-739665_960_720.jpg',
      name: 'Women white dress',
      category: 'Dress',
      seller: ' Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://cdn.pixabay.com/photo/2019/08/18/22/59/people-4415174_1280.jpg',
      name: 'Amazing White dress',
      category: 'Dress',
      seller: 'Delhi',
      price: 5000
    },
    {
      url: 'https://cdn.pixabay.com/photo/2024/05/05/18/18/ai-generated-8741705_640.jpg',
      name: 'Beautiful Dress',
      category: 'Cloths',
      seller: ' LTD',
      price: 4000
    },
    {
      url: 'https://cdn.pixabay.com/photo/2022/03/18/00/10/model-7075610_960_720.jpg',
      name: 'Beautiful Dress',
      category: 'Dress',
      seller: ' Ltd',
      price: 2000
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/06/10/54/people-2591249_960_720.jpg',
      name: 'Amazing Dress',
      category: 'Cloths',
      seller: 'ABS Ltd',
      price: 1000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;