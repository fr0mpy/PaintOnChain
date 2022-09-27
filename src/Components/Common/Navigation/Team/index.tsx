import { Typography } from '@mui/material';
import { Spacer } from '../../Spacer';
import { Section } from '../styles';

const Team: React.FC = () => {

	return (
		<Section>
			<Typography variant={'body1'}>
				Hello frens <span style={{ fontSize: '20px' }}>🖖</span>
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				For now, it's just me. My names <a href={'https://twitter.com/frompy_'} target={'blank'} style={{
					color: '#e579b9',
					fontWeight: 900,
					cursor: 'pointer !important',
					textDecoration: 'none'
				}}> Frompy </a>and I'm a web developer, gamer and martial arts enthusiast.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				I became hooked by the internet as a 5 year old kid sometime around
				1997 when my dad first showed me his new computer - A machine
				running Windows 95' and the revolutionary new web browser: Internet
				Explorer. It was incredible.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Like so many of you, I'm ridiculously excited for what the future holds for web3 and I truly hope Paint On Chain can become an integral part of helping it progress.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Thankyou for reading. Your time is greatly appreciated <span style={{ fontSize: '20px' }}>🙏</span>
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Peace, love & gm's
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Frompy
			</Typography>
		</Section>
	)
}

export default Team
