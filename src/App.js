
import './App.css';
import Header from './components/Header';
import Task1 from './components/Task1';
import Footer from './components/Footer';


function App() {
  return (
    <div className="w3-content" style={{ maxWidth: 1400 }}>
      <Header title="MY BLOG" texth="Welcome to the blog of" sp="uncnown"/>
      <Task1 />
      <Footer />
    </div>
  );
}

export default App;
