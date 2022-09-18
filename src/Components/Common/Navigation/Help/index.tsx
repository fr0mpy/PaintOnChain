import { Grid, Typography } from "@mui/material";
import { Spacer } from "../../Spacer";
import { Section } from '../styles';
import CreateIcon from '@mui/icons-material/Create';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import SquareIcon from '@mui/icons-material/Square';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Help: React.FC = () => {

    return (
        <Section>
            <Typography variant={'body1'}>
                Toggle the line width to change the size of the lines for all tools.
            </Typography>
            <Spacer vertical spacing={2} />
            <Typography variant={'body1'}>
                Toggle shape fill / outline to change the way shapes are drawn
            </Typography>
            <Spacer vertical spacing={2} />
            <Typography variant={'body1'}>
                Your work will be automatically saved each time you make a change to the canvas
            </Typography>
            <Spacer vertical spacing={2} />
            <Typography variant={'body1'}>
                If you experience any unexpected behavior of the site, simply refresh the page
            </Typography>
            <Spacer vertical spacing={2} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Drawing tool:
                </Typography>
                <CreateIcon fontSize={'large'} />
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    This
                </Typography>
            </Grid>
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Erase:
                </Typography>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="35px" height="35px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path d="m16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95l-4.95 4.95Z" />
                </svg>
            </Grid >
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Undo:
                </Typography>
                <UndoIcon fontSize={'large'} />
            </Grid>
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Redo:
                </Typography>
                <RedoIcon fontSize={'large'} />
            </Grid>
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Clear Canvas:
                </Typography>
                <DeleteForeverIcon fontSize={'large'} />
            </Grid>
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Draw Circle:
                </Typography>
                <Grid container direction={'row'} justifyContent={'center'}>
                    <Brightness1RoundedIcon fontSize={'large'} />
                    <Brightness1OutlinedIcon fontSize={'large'} />
                </Grid>
            </Grid>
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Draw Square / Rectangle:
                </Typography>
                <Grid container direction={'row'} justifyContent={'center'}>
                    <SquareIcon fontSize={'large'} />
                    <SquareOutlinedIcon fontSize={'large'} />
                </Grid>
            </Grid>
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Draw Straight Line:
                </Typography>
                <ShowChartIcon fontSize={'large'} />
            </Grid>
            <Spacer vertical spacing={3} />
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body1'} sx={{ height: 'fit-content' }}>
                    Select Items:
                </Typography>
                <SwipeVerticalIcon fontSize={'large'} />
            </Grid>
            <Spacer vertical spacing={3} />
        </Section>

    )
}

export default Help;
