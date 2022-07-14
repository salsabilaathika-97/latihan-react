import './App.css';

const App = () => {
  const born = 1997;

  const checkAge = (data) => {
    const hasil = 2022 - data;
    return hasil;
  }

  return (
    <div>
      <h1>Usia saya adalah {checkAge(born)} </h1>
    </div>
  )
};

export default App;
