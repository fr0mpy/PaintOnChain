import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { updateWalletAddress } from '../../../Redux/rootSlice';
import { useDispatch } from 'react-redux/';
import { useAppSelector } from '../../../Redux/store';

export const StyledConnectWalletButton = styled(Button)(({ theme }) => ({
	height: 48,
	minWidth: 140,
	width: 'fit-content',
	color: 'white',
	border: 'solid 5px white',
	borderRadius: theme.spacing(1),
}))

interface IConnectWalletButtonProps {
	mobileVersion?: boolean;
	handleMint(): void;
}

export const ConnectWalletAndOpenMintingButton: React.FC<IConnectWalletButtonProps> = ({
	mobileVersion,
	handleMint
}) => {
	const dispatch = useDispatch();

	const { walletAddress } = useAppSelector(state => {
		return { walletAddress: state.rootReducer.walletAddress }
	});

	const connectWallet = () => {

		if ((window as any).ethereum) {

			(window as any).ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: any) => {
				const [account] = accounts;
				(window as any).userWalletAddress = account;
				dispatch(updateWalletAddress(account))

			});
		} else {
			alert('No Web3 Wallet Extension Detected. Please install MetaMask');
		}

	}
	// const buttonStyle = { '&:hover': { background: 'rgb(160, 84, 129)', color: 'white' } }
	return (
		<>
			{walletAddress.length
				? <>
					<StyledConnectWalletButton
						variant={'contained'}
						onClick={handleMint}
						disableElevation
						color={'secondary'}
					>
						<Typography variant={'body1'} color={'black'}>
							Add MetaData & Mint
						</Typography>
					</StyledConnectWalletButton>
					{/* {mobileVersion ? null : <Typography variant={'body1'}>
						{`Connected as ${walletAddress.slice(0, 10)}...`}
					</Typography>} */}
				</>
				: <StyledConnectWalletButton
					variant={'contained'}
					onClick={connectWallet}
					disableElevation
					color={'primary'}
				>
					<Typography variant={'body1'}>
						Connect
					</Typography>
				</StyledConnectWalletButton>
			}
		</>
	)
}

export const StyledToolButton = styled(Button)(({ theme }) => ({
	height: 44,
	minWidth: 26,
	width: 'fit-content',
	border: 'solid 5px white',
	borderRadius: theme.spacing(1),
	color: 'white'
}));

interface IToolButtonProps {
	children: React.ReactNode;
	active?: boolean;
	title: string;
	onClick(): void;
}

export const ToolButton: React.FC<IToolButtonProps> = ({ children, active, title, onClick }) => {
	return (
		<StyledToolButton variant={'contained'} onClick={onClick} title={title} disableElevation sx={active ? {
			border: (theme) => `solid 5px ${theme.palette.primary.main}`,
			backgroundColor: 'white',
			'&:hover': {
				background: 'white',
			}
		} : {}}>
			{children}
		</StyledToolButton>
	)
}

export const AddColorButton = styled(Button)(({ theme }) => ({
	height: 34,
	width: 34,
	padding: 0,
	minWidth: 34,
	margin: theme.spacing(.5, .5, 0, 0)
}))

export const SideColorButton = styled(Button)(({ theme }) => ({
	height: '60%',
	width: 40,
	padding: 0,
	minWidth: 34,
	border: 'solid 5px black',
	borderRadius: theme.spacing(1)

}))