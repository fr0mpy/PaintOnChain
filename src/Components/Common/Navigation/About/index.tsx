import { Typography } from "@mui/material";
import { Spacer } from "../../Spacer";
import { Section } from '../styles';


const About: React.FC = () => {

	return (
		<Section>
			<Typography variant={'body1'}>
				Welcome to Paint On Chain! The worlds first on chain NFT art creator.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Simply connect your wallet, draw your art on the canvas and then mint it - with the art being stored ON either the Ethereum blockchain!
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				And there's no fee's for minting art! Only gas!
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				There are huge plans for this project, including our upcoming NFT launch, which will give holders even more tools and extras to create their art with - which you can read more about in the Roadmap and FAQ's.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Follow us on Twitter for project updates. There is currently no Discord, but that is also on the way.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Thanks for reading!
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>💭</Typography>
		</Section>

	)
}

export default About;
