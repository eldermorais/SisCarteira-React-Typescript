import { Switch } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import Listar from '../pages/Listar';
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
    </Switch>
  );
}

export default Routes;
