import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useRef } from 'react';

const ListItem = (props) => {

    const item = props.item;
    const id = props.id;

    const styles = getStyles();

    const [contentEdit, setContentEditable] = React.useState(item);
    const [targetId, setTargetId] = React.useState('');
    const [targetEditId, setTargetEditId] = React.useState('');
    const [shouldInput, setShouldInput] = React.useState(false);
    const inputRef = useRef(null);

    useEffect(() => {if (shouldInput) inputRef.current.focus();}, )

    return (<div style={styles.listItemStyle}>

            <input value={contentEdit} ref={inputRef}
                onChange={(e) => {setContentEditable(e.target.value);}}
                onBlur={(e) => {setShouldInput(!shouldInput);
                props.updateItem(props.id, contentEdit)}}
                type={(!shouldInput) ? 'hidden': 'text'}
            >
            </input>

            
            <div contentEditable={'false'} style={{float:'left',
             display: (!shouldInput) ? '': 'none'}}>
                {contentEdit}
            </div>
            
            <button style={styles.deleteButtonStyle}
                onMouseOver={(e) => setTargetId('true')} 
                onMouseLeave={(e) => setTargetId('false')}
                className={'true' == targetId ? 'buttonOver' : ''}

                contentEditable={'false'}

                hidden = {(shouldInput) ? 'hidden': ''}
                onClick = {(e) => {
                    console.log("This is props.item");
                    console.log(item);
                    props.deleteItem(id, item)}}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>


            <button style={styles.editButtonStyle} 
                onMouseOver={(mouseClickEvent) => setTargetId('true') } 
                onMouseLeave={(mouseClickEvent) => setTargetId('false')}
                className={'true' == targetId ? 'buttonOver' : ''}

                contentEditable={'false'}
                hidden = {(!shouldInput) ? 'hidden': ''}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>

            <button style={styles.deleteButtonStyle}
                onMouseOver={(e) => setTargetEditId('true')} 
                onMouseLeave={(e) => setTargetEditId('false')}
                className={'true' == targetEditId ? 'buttonOver' : ''}

                contentEditable={'false'}
                hidden = {(shouldInput) ? '': 'hidden'}
                onClick={(e) => {
                }}
            >
                <FontAwesomeIcon icon={faFloppyDisk} />
            </button>

            <button style={styles.editButtonStyle} 
                onClick={(e) => {
                    setShouldInput(!shouldInput);
                }
            }
                onMouseOver={(mouseClickEvent) => setTargetEditId('true') } 
                onMouseLeave={(mouseClickEvent) => setTargetEditId('false')}

                className={'true' == targetEditId ? 'buttonOver' : ''}
                contentEditable={'false'}
                hidden = {(shouldInput) ? 'hidden': ''}
            >
                <FontAwesomeIcon icon={faPen} />
            </button>

            </div>);
}


export default ListItem;


const getStyles = () => StyleSheet.create({
    listItemStyle: {
        backgroundColor: 'white',
        padding: '20px',
        margin: 'auto',
        marginBottom: '20px',
        //border: '1px solid #212121',
        borderRadius: '25px',
        border: 'none',
        height: '25px',
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
        height: '100%'}
});
