import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#fff',
        paddingTop: '4rem',
        paddingBottom: '2rem'
    },
    icon: {
        marginRight: 20
    },
    buttons: {
        marginTop: 40
    },
    cardGrid: {
        padding: '20px 0',

    },
    card: {
        // height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        // paddingTop: '56.25%'

    },
    cardContent: {
        // flexGrow: 1
        flexDirection: 'column', display: 'flex',
        marginBottom: 12
    }
}))

export default useStyles;