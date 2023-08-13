import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native-web';
import './App.css';
import ListItem from './ListItem';
import AddItem from './AddItem';

const BacklogList = (props) =>{//Список завершенных задача - состоит из компоненты добавления и самого списка

    const width = props.width;

    const styles = getStyles(width);

    const [data, setData] = React.useState(new Map());


    
    const loadList = (listData) => {

        const result = [];

        for (let [key, value] of listData) { 

            console.log(key + "mapping" + value);

            result.push(<ListItem 

                setData={setData} 
                key={key}
                id={key}
                item={value}
                deleteItem={deleteItem}
                updateItem={updateItem}

            />)
        }
        return result;
    }

    useEffect(() => {//при первой загрузке с back подтягиваем лист для завершенных задач данного пользователя

        const options = {
            method: 'GET',
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors'
        };

        const fetchData = async() => {

            const get = await fetch('http://localhost:8080/data', options);
            
            const json = await get.json();
            
            setData(new Map(Object.entries(json)));
        }

        fetchData().catch(console.error);    

    }, []);

    const deleteItem = async (id, item) => {
        
        console.log(JSON.stringify(item));
        
        await fetch("http://localhost:8080/data/" + id, { 
            
            method: 'DELETE' ,
            body: JSON.stringify(item), 
            mode: 'cors' 
        }).
        then((response) => {

            if (response.ok) {
                data.delete(id);
                setData(new Map([...data]));
            }

        });

    }

    const updateItem = async (id, item) => {

        await fetch("http://localhost:8080/data/" + id, 
        {
            method: 'PUT', 
            body: item, 
            mode: 'cors'

        }).then((response) => {

            if (response.ok) {
                data.set(id, item);
                setData(new Map([...data]));
            }

        })
    }

    return (
    <div id="list" style={styles.listStyle}>

        <div style={styles.listHeaderStyle}>
            Отложенные задачи
        </div>

        <AddItem 
            setData={setData}
            list={data}
        ></AddItem>

        <ul style={{padding:'10px'}}>

            {loadList(data)}

        </ul>


        <div style={styles.listButtonBackgroundStyle}>

            <button style={styles.listButtonStyle}>
                Загрузить еще
            </button>
            
            <button style={styles.listButtonStyle}>
                Скрыть
            </button>
             
        </div>
    </div>);
}

export default BacklogList;

const getStyles = (width, buttonColor) => StyleSheet.create({
    listStyle: {
        //backgroundColor: '#33313B',
        float:'left',
        width: width,
        height:'100vh',
        //borderRadius: "25px",
        overflowX: 'auto',
    },
    
    listHeaderStyle: {
        backgroundColor:"green",
        color:"white",
        textAlign:"center",
        padding: "10px",
        boxSizing: 'border-box',
        border: '10px solid #156',
        width:'100%',
        fontSize: "140%",
        //borderRadius: "25px",
        //top:'3%',
        //position: 'relative',   

        fontFamily:'Chilanka',
        fontWeight: 'bold',
        //fontSize: '16px',
        //backgroundColor:'#AEA9C9',
        color: '#212026'
        },
    
    listItemStyle: {
        padding: '20px',
        margin: 'auto',
        marginBottom: '20px',
        //border: '1px solid #212121',
        borderRadius: '25px',
        border: 'none',
        height: '25px',
    },
    listButtonBackgroundStyle: {
        width: '100%',
        height:'10%',
        boxSizing: 'border-box',
        border: '10px solid #33313B',
        textAlign: 'center',
        justifyContent: 'space-between',
        border: '10px solid #156',
    }, 

    listButtonStyle: {
        width:'30%',
        //left: '25%',
        height:'100%',
        //justifyContent: 'space-between',
        boxSizing: 'border-box',
        //tip - для того, чтобы расположить несколько элементов в ряд по ширине(т.е. в середине и с интервалом)
        //использовать можно marginRight вместе marginLeft в связке
        marginRight: '10%',
        marginLeft: '10%',
        //backgroundColor:'#AEA9C9',
        border: 'none',
        cursor: 'pointer',
        fontFamily:'Chilanka',
        fontWeight: 'bold',
        fontSize: '16px',
        border: 'none',
        borderRadius:'25px'
        //border: '10px solid #33313B',
        //position:'relative',
    },
});
