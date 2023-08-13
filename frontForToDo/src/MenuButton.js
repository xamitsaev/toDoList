import React from 'react';
import { StyleSheet } from 'react-native-web';

const MenuButton = (props) => {

    const styles = getStyles();

    return (
        <div style={styles.buttonBorder}>
            <button style={styles.buttonStyle} onClick={() => props.onClick()}>
                {props.buttonText}
            </button>
        </div>
    )
}

export default MenuButton;

const getStyles = () => StyleSheet.create({
    buttonStyle: {
        width:'100%',
        
        //left: '25%',

        height:'50%', 
        top:'25%',

        position:'relative',
        //backgroundColor: "red",
        borderRadius: "25px",
        //margin:'auto',
        border: 'none',
        //float: 'right',
        //height: '30px',
        cursor: 'pointer',
        
        fontFamily:'Chilanka',
        fontWeight: 'bold',
        fontSize: '16px',
        backgroundColor:'#AEA9C9',
        color: '#212026'
        //color: '#212026'
    },
    buttonBorder: {

        //width: '100%',
        height:'100px',
        boxSizing: 'border-box',
        border: 'none',

        //border: '10px solid #186',
        //Свойство CSS box-sizing позволяет нам включать отступы и границы в общую ширину и высоту элемента.
        //height: '33px',
        //top: '50px',
        //position:'absolute',
        //backgroundColor: '',
        //color: 'blue',
        //textAlign:'center',
        //borderRadius: "25px",
        //padding: '5px',
        //borderStyle: 'dotted',
        //float: 'right',
        //margin:'auto',
    }

})