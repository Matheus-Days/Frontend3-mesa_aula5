import './App.css';
import PuppyListItem from './components/PuppyListItem';
import { puppyList } from './puppyList';

function App() {
  return (
    <div className="App">
      <h1>Veterinário</h1>
      <ul>
        {puppyList.map(puppy => <PuppyListItem key={puppy.id} puppyData={puppy} />)}
      </ul>
    </div>
  );
}

export default App;
