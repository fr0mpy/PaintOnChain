import { PalletteButton } from "./PalletteButton";
import CachedIcon from '@mui/icons-material/Cached'
import { Box, IconButton } from "@mui/material";
import { generateRandomColor } from "../../../helpers/colors";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setBrushColor, setColorPallette } from "../../../Redux/rootSlice";
import { useAppSelector } from "../../../Redux/store";
import chroma from "chroma-js";
import { StyledToolTip } from "../StyledToolTip";


export const ColorPalette = () => {

	const dispatch = useDispatch();

	const { colorPallette, currentColorIndex } = useAppSelector(state => {
		return {
			colorPallette: state.rootReducer.colorPallette,
			currentColorIndex: state.rootReducer.currentColorIndex
		}
	});

	const randomizePalette = () => {
		const randomTertiaryColors = [...Array(6)].map(r => generateRandomColor());
		const randomizedPalette = chroma.scale(randomTertiaryColors).colors(16);
		dispatch(setColorPallette(randomizedPalette));
		dispatch(setBrushColor(randomizedPalette[currentColorIndex]));
	};

	return (
		<Box sx={{ margin: '6px auto 0 auto', width: { xs: 336, lg: 288 } }}>
			{colorPallette.map((color: string, i: number) => {
				return <PalletteButton color={color} index={i} />
			})}
			<StyledToolTip title={'Randomize'} arrow >
				<IconButton
					onClick={randomizePalette}
					sx={{
						height: '44px',
						width: '44px',
						minWidth: '44px',
						margin: '4px 4px 0 0 '
					}}
				>
					<CachedIcon fontSize={'large'} sx={{ fill: 'white' }} />
				</IconButton>
			</StyledToolTip>
		</Box>
	)
}
