import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native-web';
import './App.css';
import { useRef } from 'react';

/*
Эта компонента состоит из поля ввода и кнопки для создания новой записи в списке.
При нажатии кнопки/нажатии клавиши enter формируется http запрос и отправляется на сервер, и в случае успешного
выполнения запроса сформированная запись добавляется в общий список задач.
*/

const AddItem = (props) => { //компонент, состоящий из строки и кнопки сохранения введенной строки

    const styles = getStyles();//---

    const [contentEdit, setContentEditable] = React.useState('');//состояние поля ввода - текущий его текст

    const inputRef = useRef(null);

    const addItemRequest = async (event) => 
    {
        let newItem = contentEdit.trim();
        if (newItem) {//Проверка на дурака(пока только на пустую строку)

        await fetch('http://localhost:8080/data',
            {   
                method: 'POST',
                mode: 'cors',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: newItem,
            }).then(async (response) => 
            {
                if (response.ok) 
                {
                    let result = await response.json();
                    console.log(Object.entries(result));
                    let lop = new Map([...new Map(Object.entries(result)), ...props.list]);
                    props.setData(lop);
                    console.log(new Map([...new Map(Object.entries(result)), ...props.list]));
                    setContentEditable('');
                }

                else (alert("Request Failed. Try Again"));
                
            }).catch(() => {
                alert("Network Error. Try Later.");
        });
        }
    }

    useEffect(() => {
        inputRef.current.focus();},
        )
    
    return (
    <div>

        <div style={styles.listItemStyle}>
            <input value={contentEdit} ref={inputRef}
                onChange={(e) => {setContentEditable(e.target.value);}}
                onKeyDown={
                    async (event) => {
                        if (event.key === 'ENTER') addItemRequest(event);
                    }
                }  
            >
            </input>
        </div>

        <div style={{textAlign:'center', weight:'100%'}}>
            <button style={styles.addItemStyle}
            onClick={addItemRequest}>
                Добавить запись
            </button>
        </div>

    </div>);
}


export default AddItem;


const getStyles = () => StyleSheet.create({

    listItemStyle: {
        backgroundColor: 'white',
        padding: '20px',
        margin: 'auto',
        marginBottom: '20px',
        //border: '1px solid #212121',
        borderRadius: '25px',
        border: 'none',
        height: '30%',
        marginTop: '20px',
    },

    editButtonStyle: {
        float:'right',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        height: '100%'},

    deleteButtonStyle: {
        float:'right',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        backgroundColor: 'white',
        height: '100%'},

    addItemStyle: {
        float: 'center',
        border: 'none',
        cursor:'pointer',
        //backgroundColor: 'white',
        borderRadius: '25px',
        //textAlign:'center',
        fontFamily:'Chilanka',
        fontWeight: 'bold',
        fontSize: '16px',
        margin: '20px',
        padding: '10px',
        //backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(63, 81, 181, 1) 2%, rgba(0, 188, 212, 1) 50%, rgba(238, 130, 238, 1) 100%)'
    },
});
