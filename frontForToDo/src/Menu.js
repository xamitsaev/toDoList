import {StyleSheet} from "react-native";
import React from 'react';

const Menu = (props) => {

    const [width, setWidth] = React.useState("30%");
    
    const styles = getStyles(width);

    const buttonClicked = () => {
        setWidth("10%");
        props.toggleBool();
    }

    return (
        <div style={styles.button}>
            <button onClick={buttonClicked}>
                Open
            </button>
        </div>);

}

const getStyles = (width) => StyleSheet.create({
    button: {
        float:"left", 
        backgroundColor:"purple",
        width: width,
        color: "#AEA9C9",
        //borderRadius: "25px"
    }
});

export default Menu;