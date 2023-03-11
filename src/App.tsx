import icon from './assets/icon.png';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <img className='logo' src={icon} alt="icon" />
        <h1>Kaitlyn Parsons</h1>
      </div>
      <div className="sidebar">Sidebar</div>
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default App
;