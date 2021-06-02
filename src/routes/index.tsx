import { Switch } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import Listar from '../pages/Listar';
import Print from '../pages/Print';
import Profile from '../pages/Profile';
import Relatorio from '../pages/Relatorio';
import SignIn from '../pages/SignIn';
import CustomRoute from './CustomRoute';

function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={SignIn} />
      <CustomRoute path="/dashboard" exact component={Dashboard} isPrivate />
      <CustomRoute path="/relatorio" exact component={Relatorio} isPrivate />
      <CustomRoute path="/cadastro" exact component={Cadastro} isPrivate />
      <CustomRoute path="/listar" exact component={Listar} isPrivate />
      <CustomRoute path="/print" exact component={Print} isPrivate />
      <CustomRoute path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}

export default Routes;
