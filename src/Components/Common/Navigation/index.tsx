import * as React from 'react';
import { NavContainer, SectionContainer } from './styles';
import { Grid, Typography } from '@mui/material';
import { Spacer } from '../Spacer';
import { SocialLinks } from '../SocialLinks';
import { Headings } from './Headings';
import { useAppSelector } from '../../../Redux/store';
import { MenuSections } from '../MenuSections';
import { DrawerComponent } from '../Drawer';

const Navigation = () => {

	const sectionRef = React.useRef<HTMLDivElement>(null);

	const { section } = useAppSelector(state => {
		return { section: state.rootReducer.section }
	});

	React.useEffect(() => {
		if (sectionRef.current) {
			sectionRef.current.scrollTop = 0;
		}
	}, [section])

	return (
		<DrawerComponent anchor={'left'}>
			<NavContainer id={'leftCol'} direction={'column'} justifyContent={'center'}>
				<Typography variant={'h3'} textAlign={'center'}>
					Paint On Chain
				</Typography>
				<Spacer vertical spacing={1} />
				<Grid container direction={'row'} justifyContent={'center'}>
					<Headings />
				</Grid>
				<Spacer vertical spacing={3} />
				<SectionContainer ref={sectionRef}>
					<MenuSections />
				</SectionContainer>
				<Spacer vertical spacing={2} />
				<SocialLinks />
			</NavContainer>
		</DrawerComponent>
	);
};

export default Navigation;
