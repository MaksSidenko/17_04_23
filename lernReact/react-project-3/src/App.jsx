import './App.css';
import Project from './project';

const employee = [
	{
		name: 'Maks',
		id: '637',
    surname: 'Si'
	},
	// {
	// 	name: 'Lex',
	// 	id: '234'
	// }
]
function App() {
  const baseEmployeeObject = {
    role : 'employee',
    company : 'tesla'
  }
  const firstEmployee = {...baseEmployeeObject,  ...employee[0]}
  console.log(firstEmployee)
  return(
    <div className="App">
      <h1><Project {...firstEmployee}/></h1>
    </div>
    );
}

export default App;

