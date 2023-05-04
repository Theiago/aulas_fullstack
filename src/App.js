import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Usuario from './Usuario';
import Home from "./Home";
import Sobre from "./Sobre";
import Alunos from "./Alunos";
import Pokemon from './Pokemon';
import ApiLocal from './apiLocal';

function App() {
  return (
    <>
    <header>
      <Link to='/usuario'>Usuário</Link><br/>
      <Link to="/sobre/1">Sobre</Link>
      <Link to="/alunos/">Alunos</Link>
      <Link to="/pokemon/ditto">Pokemon</Link>
      <Link to="/apilocal">CallApi</Link>
    </header>
    <main>
      <Switch>
        <Route path="/home" component= {Home} />
        <Route path="/usuario" component= {Usuario} />
        <Route path="/sobre/:id?" component= {Sobre} />
        <Route path="/alunos" component= {Alunos} />
        <Route path="/pokemon/:pokemonName?" component={Pokemon} />
        <Route path="/apilocal" component={ApiLocal} />
      </Switch>
    </main>
    </>
  );
}

export default App;
