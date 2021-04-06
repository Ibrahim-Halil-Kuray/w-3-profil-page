//bir profil sayfasi olusturulmasi isteniyor odevimizde.
import logo from './logo.svg';
import './App.css';

import Profile from "./component/profile"//istenen sayfayi olusturacak foksiyonu import ettik
//asagida uygun yere yerlestiriyoruz App icerisine

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>    
      </header>
    </div>
  );
}

export default App;
