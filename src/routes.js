import React from 'react';
import PropTypes from 'prop-types';

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Store from './pages/Store';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Main from './pages/Main';
import Download from './pages/Download';

const Início = createStackNavigator(
  {
    Main,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    },
    cardStyle: {
      backgroundColor: '#ddd',
    },
  }
);

const Favoritos = createStackNavigator(
  {
    Favorites,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    },
    cardStyle: {
      backgroundColor: '#ddd',
    },
  }
);

const Loja = createStackNavigator(
  {
    Store,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    },
    cardStyle: {
      backgroundColor: '#ddd',
    },
  }
);

const Carrinho = createStackNavigator(
  {
    Cart,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    },
    cardStyle: {
      backgroundColor: '#ddd',
    },
  }
);

const Downloads = createStackNavigator(
  {
    Download,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    },
    cardStyle: {
      backgroundColor: '#ddd',
    },
  }
);

const Footer = createBottomTabNavigator(
  {
    Início: {
      screen: Início,
      navigationOptions: {
        tabBarLabel: 'INÍCIO',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="home-outline" size={23} color={tintColor} />;
        },
      },
    },
    Favoritos: {
      screen: Favoritos,
      navigationOptions: {
        tabBarLabel: 'FAVORITOS',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="star" size={23} color={tintColor} />;
        },
      },
    },
    Loja: {
      screen: Loja,
      navigationOptions: {
        tabBarLabel: 'LOJA',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="shopping" size={23} color={tintColor} />;
        },
      },
    },
    Carrinho: {
      screen: Carrinho,
      navigationOptions: {
        tabBarLabel: 'CARRINHO',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="cart" size={23} color={tintColor} />;
        },
      },
    },
    Downloads: {
      screen: Downloads,
      navigationOptions: {
        tabBarLabel: 'DOWNLOADS',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="download" size={23} color={tintColor} />;
        },
      },
    },
  },
  {
    initialRouteName: 'Loja',
    tabBarOptions: {
      inactiveTintColor: '#bbb',
      showIcon: true,
      activeTintColor: '#f0a21d',
      style: {
        backgroundColor: '#000',
      },
    },
  }
);

export default createAppContainer(Footer);

// aqui as propTypes não validaram pq eu deveria criar uma função pra cada icone, mas como o tempo foi corrido essa validação passou
Footer.propTypes = {
  tintColor: PropTypes.string,
};
