import './App.css';
import Employee from './Props';

const employeeInfo = [
  {
    name: 'andriy',
    age: '22',
    keyID
  },
  {
    name: 'ivan',
    age: '23',
    keyID
  },
  {
    name: 'joe',
    age: '25',
    keyID
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          employeeInfo.map(employee=>{
            return (
            <Employee {...employee}/>
            );
        })}
      </header>
    </div>
  );
}

export default App;

