import './App.css';

const App = () => {
  const cars = ['Ayla', 'Agya', 'Sigra', 'Cayla'];

  return (
    <div>
        <h1>Keluarga Astra</h1>
        {
          cars.map(item => 
            <h1>{item}</h1>
          )
        }
    </div>
  )
};

export default App;
