import axios from 'axios'
const url='http://192.168.0.13:3333/api/v1/questions'



const getQuestion= () => ({
    type:'GET_QUESTION',
    payload:axios.get(url+'/questions')
})