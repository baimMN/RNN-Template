import React, {Component} from 'react';
import {StyleSheet,TextInput, View} from 'react-native';
import {connect} from 'react-redux'
import * as action from '../redux/actions/root'
import {Navigation} from 'react-native-navigation'
import Entypo from 'react-native-vector-icons/Entypo'//eye/eye-off
import { Container, Header, Title, Content, Footer,Label, FooterTab, Button, Left, Right, Body, Icon, Text,Item,Input } from 'native-base'

const defaultColor='rgb(41, 122, 255)'
 class Home extends Component {
    tappp =()=> {
        Navigation.push('Home',{
            component:{
                name:'Question',
                id:'Question'
            }
              
        })
    }
    componentDidMount(){
        this.props.getQuestion(1)
    }
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:defaultColor}}>
                    <Left style={{flex:1}}>
                        <Text style={{fontSize:18,color:'white'}}>Informasi Interview</Text>
                    </Left>
                </Header>
                <Content>
                    <View style={{flex:1,width:'100%',padding:10}}>
                        <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center',height:120,padding:10}}>
                            <Text style={{fontSize:22}}>PT finalTest</Text>
                        </View>
                        <View style={{flex:1,width:'100%'}}> 
                            <Text>
                                Kamu akan diberi beberapa pertanyaan dengan waktu yang sudah ditentukan,tidak ada salah dan benar jawablah dengan sebenar benarnya
                            </Text>
                        </View>
                        <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center',height:120,padding:10}}>
                            <Button rounded onPress={() => this.tappp()} style={{backgroundColor:'rgb(120, 172, 255)',alignSelf:'center',marginTop:30}}>
                                <Text>Mengerti</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

mapStateToProps=state => ({
  testData:state.user.currentUser
})
dispatchEvent=dispatch => ({
    getQuestion:(userId) => {dispatch(action.getQuestion)}
})
export default connect(mapStateToProps,dispatchEvent)(Home)

