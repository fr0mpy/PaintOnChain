import React from 'react';
import { HexColorPicker } from "react-colorful";
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setBrushColor, setColorPallette } from '../../../Redux/rootSlice';
import throttle from '../../../helpers/events';
import { useAppSelector } from '../../../Redux/store';

interface IProps {
	color: any;
}

export const ColorPicker: React.FC<IProps> = ({ color }) => {
	// const [loaded, setLoaded] = React.useState<boolean>(false);

	const dispatch = useDispatch();
	const { colorPallette, currentColorIndex } = useAppSelector(state => {
		return {
			colorPallette: state.rootReducer.colorPallette,
			currentColorIndex: state.rootReducer.currentColorIndex
		}
	});

	const throttleColorUpdate = (color: string) => {
		throttle(() => { handleColorUpdate(color) }, 250)
	}

	const handleColorUpdate = (color: string) => {
		const updatedColors = colorPallette.map((c: string, i: number) => {
			if (i === currentColorIndex) return color;

			return c;
		});

		dispatch(setColorPallette(updatedColors));
		dispatch(setBrushColor(color));
		handleSaveColors()
	}

	const handleSaveColors = () => {
		const colorsData = JSON.stringify(colorPallette);
		localStorage.setItem('colorsData', colorsData);
	}

	return (
		<Grid container direction={'row'} justifyContent={"center"}>
			<HexColorPicker color={color} onChange={throttleColorUpdate} style={{ height: '160px', width: '88%', maxWidth: '300px', border: 'solid 4px white', borderRadius: '12px', boxSizing: 'border-box' }} />
		</Grid>
	)
}
