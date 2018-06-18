/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { TodoDetailScreen } from './components/TodoDetailScreen';
import { createStackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const initialTodoState = {
  id: 0,
  title: "Hello World!!!",
  content: "Something to write here....."
}
const initialState = {
  todos: [
    {...initialTodoState}
  ]
}

type Props = {};
export class HomeScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [
        {...initialTodoState},
        {...initialTodoState},
        {...initialTodoState},
        {...initialTodoState},
      ]
    }
  }

  handleTodoBox(e) {
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map( todo => {
          return(
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')}>
              <View style={styles.todoBox}>
                <Text>{todo.title}</Text>
              </View>
            </TouchableHighlight>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  todoBox: {
    height: 60,
    marginBottom: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: TodoDetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
