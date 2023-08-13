import React from 'react';
import DoneList from './DoneList';
import InProcessList from './InProcessList';
import BacklogList from './BacklogList';
import FullMenu from './FullMenu';
import { StyleSheet } from 'react-native-web';
const App  = () => {
  
    const styles = getStyles();

    const [whatList, setWhatList] = React.useState("DoneList");

    const renderList = () => {
      switch (whatList) {
        case "DoneList":
          return <DoneList width = {'80%'} />
        case "InProcessList":
          return <InProcessList width = {'80%'} />
        case "BacklogList":
          return <BacklogList width = {'80%'} />
      }
    }

    return (
      <body style={styles.pageConfigs}>

        <div style={styles.header}>

          <div style={{float: 'right', width:'70%', textAlign:'center', verticalAlign:'middle', height:'100%'}}>
            <h1 style={{color: '#212026', left:'50%', position: 'absolute',
                fontFamily:'Chilanka'}}>To Do List
            </h1>
          </div>

        </div>


        <div style={styles.listAndMenu}>
            <FullMenu width={'20%'} setWhatList={setWhatList}/> 
            {renderList()}
        </div>
          
      </body>  
    );
  }
 
export default App;

const getStyles = () => StyleSheet.create({
  pageConfigs: {
    fontFamily:'arial',
    height:'800px',
    width:'auto',
    //backgroundImage: 'linear-gradient(180deg, blue, darkblue)',
    backgroundColor: '#6E6B80',
    //top: '600px',
    //position: 'absolute',
    
  },
  header: {
    //borderRadius: '25px',
    //border: '10px solid #186',
    fontFamily:'arial',
    //backgroundImage: 'linear-gradient(180deg, blue, darkblue)',
    height:'100px',
    boxShadow: '5px 10px'
  },
  listAndMenu: {
    backgroundColor: '#6E6B80',
    height:'800px',
    //border: '10px solid #186',
  },
})