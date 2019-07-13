

import React, {Component} from 'react';
import {StyleSheet,TextInput, View,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux'
import axios from 'axios'
import {Navigation} from 'react-native-navigation'
import Entypo from 'react-native-vector-icons/Entypo'//eye/eye-off
import { Container, Header, Title, Content, Footer,Label, FooterTab, Button, Left, Right, Body, Icon, Text,Item,Input } from 'native-base'
import Axios from 'axios';
import {PulseIndicator} from 'react-native-indicators'
const url='http://192.168.0.13:3333/api/v1'

class App extends Component {
  constructor(){
    super()
    this.state={
        borderColor:'rgb(82, 148, 255)',
        email:'',
        name:'',
        loading:true,
        warning:'false',
        phoneNumber:''
    }
  }

  register=()=> {
    this.setState({loading:true})
    const {name,email,phoneNumber} = this.state
    if(!name || !email || !phoneNumber){
      this.setState({warning:'field tidak bisa kosong'})
      return false
    }
    axios.post(url+'/register',{
      name,
      email,
      phoneNumber
    })
      .then(res => {
        if(res.data.warning){
          alert('haiiii')
        }else {
          // alert('adasd')
          // alert('adas')
          // const {token}=res.data.token
          this.props.saveUser(name,email,phoneNumber)
          Navigation.setRoot({
            root: {
              stack:{
                children:[
                  {
                    component:{
                      name:'Home',
                      id:'Home'
                    }
                  }
                ],
                options:{
                  topBar:{
                    height:0
                  }
                }
              }
            }
          })
        }
      })
      .catch(err => alert(err))
  }

  focus=()=> {
    console.log('asad')
  }


  render() {
    return (
      <Container>
        <Content>
            <View style={{marginTop:40,flex:1,width:'100%',padding:10}}> 
                <Text style={{alignSelf:'center',fontSize:40}}>Register</Text>
                <Item floatingLabel style={{marginTop:10,borderColor:this.state.borderColor}}>
                    <Label>Name</Label>
                    <Input onChangeText={(text)=> this.setState({name:text})} />
                </Item>
                <Item floatingLabel last style={{marginTop:10,borderColor:this.state.borderColor}}>
                    <Label>Email</Label>
                    <Input onChangeText={(text)=> this.setState({email:text})} />
                </Item>
                <Item floatingLabel last style={{marginTop:10,borderColor:this.state.borderColor}}>
                    <Label>Phone Number</Label>
                    <Input onChangeText={(text)=> this.setState({phoneNumber:text})}/>
                </Item>
                <Button block rounded onPress={() => this.register()} style={{backgroundColor:'rgb(120, 172, 255)',marginTop:30}}>
                    <Text>Register</Text>
                </Button>
                <View style={{marginTop:15,flex:1,width:'100%',padding:10}}>
                    <Text style={{color:'red',alignSelf:'center'}}>asdddddddddad  </Text>
                </View>
            </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

mapStateToProps=state => ({
  test:state.root.test
})

dispatchAction=(dispatch) => ({
  saveUser: (name,email,token) => {dispatch({type:"SAVE_USER",name,email,token})}
})

export default connect(mapStateToProps,dispatchAction)(App)