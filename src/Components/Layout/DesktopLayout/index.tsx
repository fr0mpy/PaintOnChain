
import * as React from 'react';
import Grid from "@mui/material/Grid/Grid";
import { LoadingProgress } from '../../../Components/Common/LoadingProgress'

interface IProps {
	navigation?: React.ReactNode;
	canvas?: React.ReactNode;
	tools?: React.ReactNode;
};

const DesktopLayout: React.FC<IProps> = ({ navigation, canvas, tools }) => {

	return (
		<Grid container direction={"row"}>
			<div>
				{navigation}
			</div>
			<div style={{ flex: 2 }}>
				{canvas}
			</div>
			<div style={{ width: '25%', maxWidth: '360px', flex: 1 }}>
				{tools}
			</div>
		</Grid>
	);
}

export default DesktopLayout;
