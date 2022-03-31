import { makeStyles } from '@material-ui/core/styles';

export const authTheme = makeStyles((theme) => ({
    root: {
        display: "flex",
        '@media (max-width:500px)': {
            flexDirection: 'column'
        }
    },
    boxText: {
        width: '59%',
        '@media (max-width:500px)':{
            width: '100%', 
            height: '59vh'
        }
    },
    vertCenterBox: {
        display: 'flex',
        flexDirection: 'column',
        height: '60%',
        '@media (max-width: 500px)': {
            height: '100%'
        },
        width: '100%'
    },
    textField: {
        paddingBottom: '30px',
        '@media (max-width: 500px)':{
            paddingBottom: '10px'
        }
    },
    formFontSize: {
        '@media (max-width:300px)': {
            fontSize: '10px'
        }
    }
}));

