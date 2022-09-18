import { LinearProgress, Typography, Grid, CircularProgress } from '@mui/material';
import Stack from '@mui/system/Stack/Stack';

interface IProgressLoading {
    loading: boolean;
}

export const LoadingProgress: React.FC<IProgressLoading> = ({ loading }) => {

    return loading
        ? <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ width: 180 }}>
            <Stack sx={{ width: 120, color: 'grey.500' }} spacing={2}>
                <LinearProgress color="primary" />
            </Stack>
            <Typography textAlign={'center'} color={'black'}>Loading Canvas...</Typography>
        </Grid>
        : null
};