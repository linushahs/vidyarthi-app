import './App.css';
import Content from './landing-page-components/Content';
import Header from './landing-page-components/Header';
import SignIn from './landing-page-components/SignIn';
import SignUp from './landing-page-components/SignUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content />
      <SignIn />
      <SignUp />

    </div>
  );
}

export default App;
