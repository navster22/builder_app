import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ViewCount from './components/ViewCount';
import SetCount from './components/SetCount';

function App() {

  const [count,setCount] = useState(0);
  const [state,setState] = useState([]);




  useEffect(function() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(function(json) {
     console.log(json)
     setState([...state,...json.products])
    } )
    .catch(err => console.log(err))
  },[])
  


  return (
    <div>
      <center>
        <ViewCount count={count} setCount={setCount}/>
        <SetCount count={count} setCount={setCount}/>
        {/* {
          (state.length > 0)
          ? (
            state.map(function(item){
              return (
                <div key={item.id} id="">
                  <b>{item.brand}</b>
                  <p>{item.description}</p>
                  <img src={item.thumbnail}></img>
                </div>
              )
            })
          )
          : (<p>No products found</p>)
        } */}
      </center>
    </div>
  );
}

export default App;
