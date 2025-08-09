import logo from './logo.svg';
import './App.css';
import { CohortsData} from './Cohort'
import CohortDetails from './CohortDetails'; 

function App() {
 
  return (
  <div>
    <h1>Cohorts Details</h1>
    {CohortsData.map(cohort => <CohortDetails key={cohort.cohortCode} cohort={cohort}/>)}
  </div>
  );
}

export default App;
