import { Private } from './Private';
import { UseAuth } from './Hooks/UseAuth';
import { Public } from './Public';


function App() {
  const {token} = UseAuth(); 

  if (token) {
    return <Private/>
  } 
  return <Public/>
    
}

export default App;
