import { Typography } from "@mui/material";
import { Spacer } from "../../Spacer";
import { Section } from '../styles';


const About: React.FC = () => {

	return (
		<Section>
			<Typography variant={'body1'}>
				Welcome to Paint On Chain! The worlds first on chain NFT art creation suite.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				Simply connect your wallet, draw your art on the canvas and then mint it - with the art being stored ON the Ethereum blockchain!
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				You can mint art to your own wallet or to a friends.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				We charge no fee for this, you'll only need to pay for the gas.
			</Typography>
			<Spacer vertical spacing={1} />
			<Typography variant={'body1'}>
				This current version of Paint On Chain will always be open to the public use. However the full creation suite we plan on building using funds raised through our NFT launch, will only be accessible by holders of our NFT - You can read more about this in our RoadMap.
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
