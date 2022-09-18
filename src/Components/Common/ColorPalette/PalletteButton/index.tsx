import Button from "@mui/material/Button/Button";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setBrushColor, setCurrentColorIndex, setDrawerOpen } from "../../../../Redux/rootSlice";
import { Theme } from "@mui/system";
import { useAppSelector } from "../../../../Redux/store";

interface IProps {
    color: string;
    index: number
}

export const PalletteButton: React.FC<IProps> = ({ color, index }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const dispatch = useDispatch();
    const { currentColorIndex } = useAppSelector(state => {
        return { currentColorIndex: state.rootReducer.currentColorIndex }
    });

    const onClick = () => {
        dispatch(setCurrentColorIndex(index));
        dispatch(setBrushColor(color));

        if (isMobile) {
            setTimeout(() => {
                dispatch(setDrawerOpen(false));
            }, 180)
        }
    };

    return (
        <Button
            sx={{
                height: '44px',
                width: '44px',
                minWidth: '44px',
                padding: 0,
                backgroundColor: color,
                border: currentColorIndex === index ? '4px solid cyan' : '2px solid white',
                borderRadius: '4px',
                margin: '4px 4px 0 0',
                cursor: 'pointer',
                boxSizing: 'border-box',

                '&:hover': {
                    backgroundColor: color
                }
            }}
            onClick={onClick}>
        </Button>
    )
}