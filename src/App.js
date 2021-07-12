
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='container-fluid' style={{height:'100vh'}}>
      <Sidebar/>
      <Content/>
      
    </div>
  );
}

export default App;
