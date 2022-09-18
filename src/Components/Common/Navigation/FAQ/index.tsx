import { Typography } from "@mui/material";
import { Section } from '../styles';
import React from 'react';

const FAQ: React.FC = () => {
	return (
		<Section>
			<div style={{ margin: '0 0 18px 0' }}>
				<h2>
					Does minting the art I've drawn cost?
				</h2>
				<Typography variant={"body1"}>
					The only fee you will have to pay is gas.
				</Typography>
			</div>
			<div style={{ margin: '18px 0' }}>
				<h2>
					Will there be more tools to paint/draw with?
				</h2>
				<Typography variant={"body1"}>
					Yes! You bet there will be. Loads in fact. However, they will be developed after the NFT launches.
				</Typography>
			</div>
			<div style={{ margin: '18px 0' }}>
				<h2>
					When NFT launch?
				</h2>
				<Typography variant={"body1"}>
					Planning will start over the next couple of weeks. A confirmation date will soon follow for both the Ethereum & Arbitrum blockchains.
				</Typography>
			</div>
			<div style={{ margin: '18px 0' }}>
				<h2>
					What will the NFT artwork be?
				</h2>
				<Typography variant={"body1"}>
					They're till very much in "idea phase", with a few ideas pending. However one's thing for certain, is that they'll be on chain.
				</Typography>
			</div>
			<div style={{ margin: '18px 0' }}>
				<h2>
					What will holders get?
				</h2>
				<Typography variant={"body1"}>
					Exclusive access to all new tools and features and cheaper gas prices.
				</Typography>
			</div>
			<div style={{ margin: '18px 0' }}>
				<h2>
					What does "on chain" actually mean?
				</h2>
				<Typography variant={"body1"}>
					Simply put: usually NFT artwork is stored on IPFS (a decentralized network of computers, but not a blockchain). Where as the artwork for an on chain NFT is stored
					- yep, you guessed it - on chain. More specifically in this case: it's stored on the contract which has created it, which is stored on the blockchain.
				</Typography>
			</div>
			<div style={{ margin: '18px 0' }}>
				<h2>
					What about memory/gas issues storing art on the contract?
				</h2>
				<Typography variant={"body1"}>
					Good question! 10 points to you if you asked this. Firstly, there will be no issues with this in the coming future. But in terms of this project lasting years, contract storage and gas prices for minting will eventually become an issue. There's some pretty interesting ideas which have been thought up, including a seperate contract to mimic a popular
					existing solution to this issue on web3... Although, can't say too much on that YET.
				</Typography>
			</div>
			<div style={{ margin: '18px 0' }}>
				<Typography variant={"body1"}>
					Any other things you'd like to know, get in touch on Twitter!
				</Typography>
			</div>
		</Section>
	)
}

export default FAQ;
