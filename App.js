import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';
import Perfil from './src/pages/Perfil';
import Midia from './src/pages/Midia';
import Pagina from './src/pages/Pagina';
import CustomDrawer from './src/component/CustomDrawer';

  


const Routes= createAppContainer(
  createDrawerNavigator({
    Home,
    Contato,
    Perfil,
    Midia,
    Pagina,
    
  },{
    initialRouteName: 'Home',
     contentComponent: CustomDrawer
  })
);


export default Routes;


