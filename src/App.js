import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withstyles} from '@material-ui/core/styles';

const styles = theme =>({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit =3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
}

)

const customers =[
{
  'id':1,
  'image':'https://placeimg.com/64/64/3',
'name' : '김치국',
'birthday':'96122',
'gender':'남자',
'job':'대학생'

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/5',
'name' : '홍길동',
'birthday':'96122',
'gender':'남자',
'job':'대학생'

},
{
  'id':3,
  'image':'https://placeimg.com/64/64/2',
'name' : '나동빈',
'birthday':'96122',
'gender':'남자',
'job':'대학생'

}


]

class App extends Component {

 render(){
  return (
   <div>
    {
      customers.map(c =>{
        return(<
          Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
         />
        );

      })

    }

   </div>
  );
 }
 
}

export default App;