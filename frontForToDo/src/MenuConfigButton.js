import React from 'react';
import { StyleSheet } from 'react-native-web';

const MenuConfigButton = (props) => {

return (
<div style={{float:'left', width:'20%', textAlign:'center', verticalAlign:'middle', height:'100%',
        }}>

          <button  style={{width: '100%' ,
            //textAlign:'center', 
            height:'50%',
            width: '50%',
            //border: '10px solid #186',
            //verticalAlign:'middle',

            top:'25%' ,//top работает вместе с position только
            position: 'relative',

            border: 'none',
            cursor: 'pointer',
            fontFamily:'Chilanka',


        fontFamily:'Chilanka',
        fontWeight: 'bold',
        fontSize: '16px',
        backgroundColor:'#AEA9C9',
        color: '#212026',
        
            
        }} onClick={props.toggleBool} /*id="menuButton"*/>
            Меню
          </button>
          </div>)
}

export default MenuConfigButton;