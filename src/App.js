import { Fragment } from 'react';
import Headers from './components/Headers';
import Form from './components/Form'

function App() {
  return (
    <Fragment>
      <Headers />

      <div className='container mt-5'>
        <div className='row'>
          <Form /> 
        </div>
      </div>
    
    </Fragment>
  );
}

export default App;
