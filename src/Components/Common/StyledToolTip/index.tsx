import Tooltip from "@mui/material/Tooltip/Tooltip";

interface IToolTip {
    children: React.ReactElement;
    title: string;
    arrow?: boolean
}

export const StyledToolTip: React.FC<IToolTip> = ({ children, title, arrow }) => {
    return (
        <Tooltip
            title={title}
            arrow={arrow}
            PopperProps={{
                sx: {
                    '& .MuiTooltip-tooltipArrow': {
                        '& :before': {
                            color: 'white'
                        }
                    },
                    "& .MuiTooltip-tooltip": {
                        backgroundColor: 'white',
                        color: 'black',
                        fontFamily: (theme) => theme.typography.body1,
                        fontSize: 14
                    }
                }
            }}>
            {children}
        </Tooltip>
    )
}