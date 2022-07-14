import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  const myInfo = {
    name: 'Salsa',
    address: 'Banjarmasin',
    status: 'Belum Menikah',
    age: '25'
  }
  return (
    <div>
      <Header />
      <Body />
      <h2>Nama saya adalah {myInfo.name}</h2>
      <h2>Alamat saya adalah {myInfo.address}</h2>
      <h2>Status saya adalah {myInfo.status}</h2>
      <h2>Umur saya adalah {myInfo.age}</h2>
      <Footer />
    </div>
  )
};

export default App;
