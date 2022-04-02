import "./App.css";
import Header from "./components/Header/Header";
import MainMenu from "./components/Mainmenu/MainMenu";
import MyProjects from "./components/Myprojects/MyProjects";
import Resume from "./components/Resume/Resume";
import Title from "./components/Title/Title";

function App() {
  return <div className="App">
    <Title/>
    <Header/>
    <MainMenu/>
    
    
  </div>;
}

export default App;
