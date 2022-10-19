import './App.css';
import MainVideo from './Components/mainvideo/MainVideo';
import NavBar from './Components/navbar/NavBar';
import VideoList from './Components/videolist/VideoList';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MainVideo />
    </div>
  );
}

export default App;
