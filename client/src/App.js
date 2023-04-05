import React from 'react'
import Home from './components/Home';
/*import React,{useEffect,useState} from 'react'

function App() {
  const [backendData,setbackendData] = useState([{}])
  //fetching backend api
  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setbackendData(data);
      }
    )
  },[])
  return (
    <div className="App">
       {backendData.users[0]}
    </div>
  );
}
*/
function App() {
  return(
    <div className="App">
       <Home></Home>
    </div>
  )
}

export default App;
