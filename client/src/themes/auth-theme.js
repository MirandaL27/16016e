import { makeStyles } from '@material-ui/core/styles';

export const authTheme = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    boxText: {
        width: '59%'
    },
    vertCenterBox: {
        display: 'flex',
        flexDirection: 'column',
        height: '60%',
        width: '100%'
    },
    textField: {
        paddingBottom: '30px'
    },
    formFontSize: {
        '@media (max-width:300px)': {
            fontSize: '10px'
        }
    }
}));

