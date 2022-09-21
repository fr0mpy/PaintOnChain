import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Typography from '@mui/material/Typography/Typography';
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setSnackbar } from "../../Redux/rootSlice";
import { useAppSelector } from "../../Redux/store";

export const CustomSnackbar = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setSnackbar(''))
    };

    const { snackbar } = useAppSelector(state => {
        return { snackbar: state.rootReducer.snackbar }
    });

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={Boolean(snackbar)}
            onClose={handleClose}
            autoHideDuration={6000}
        >
            <MuiAlert
                elevation={6}
                variant={'filled'}
                onClose={handleClose}
                severity="warning"
                sx={{
                    width: '100%',
                    border: 'solid 4px white',
                    '& .MuiAlert-icon': {
                        paddingTop: 0,
                        alignItems: 'center'
                    },
                    '& .MuiAlert-action': {
                        paddingTop: 0,
                        alignItems: 'center'
                    },
                    '& .MuiSvgIcon-root': {
                        height: '1.5em',
                        width: '1.5em'
                    }
                }}
            >
                <Typography variant={'body2'} sx={{ fontSize: 16 }}>
                    {snackbar}
                </Typography>
            </MuiAlert>
        </Snackbar>
    )
}