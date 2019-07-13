import { Navigation } from "react-native-navigation";
import App from "./App";
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Home from './src/screen/home'
import Question from './src/screen/question'

Navigation.registerComponentWithRedux('FirstScreen', () => App, Provider, store);
Navigation.registerComponentWithRedux('Home',() => Home, Provider, store)
Navigation.registerComponentWithRedux('Question',() => Question, Provider, store)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        id:"FirstScreen",
        name: "FirstScreen"
      }
    }
  });
})