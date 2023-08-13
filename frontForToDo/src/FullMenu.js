import React from 'react';
import { StyleSheet } from 'react-native-web';
import MenuButton from './MenuButton';

const FullMenu = (props) => {/* компонент menu - список доступных опций приложения
список завершенных задач, список задач в процессе, список задач на будущее */
    
    const styles = getStyles();

    return (
    <div style={styles.menuStyle}>
        <MenuButton buttonText={"Завершенные задачи"} onClick={() => props.setWhatList("DoneList")}>
        </MenuButton>
        <MenuButton buttonText={"В процессе"} onClick={() => props.setWhatList("InProcessList")}>
        </MenuButton>
        <MenuButton buttonText={"Не начатое"} onClick={() => props.setWhatList("BacklogList")}>
        </MenuButton>
    </div>
    );
}

const getStyles = () => StyleSheet.create({
    menuStyle: {
        float:'left', 
        backgroundColor:'green',
        border: '10px solid #186',
        boxSizing: 'border-box', //Свойство CSS box-sizing позволяет нам включать отступы и границы в общую ширину и высоту элемента.
        width: '80%',
        height: '100%',
        //fontFamily:'Chilanka'
        //borderRadius: "25px",
    },
});

export default FullMenu;