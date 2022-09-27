import Avatar from "@mui/material/Avatar/Avatar"
import Grid from "@mui/material/Grid/Grid"

interface IProps {
    direction?: 'row' | 'column'
}
export const SocialLinks: React.FC<IProps> = ({ direction = 'row' }) => {
    return (
        <Grid container direction={direction} justifyContent={'center'} sx={{ margin: { md: (theme) => theme.spacing(1, 0) }, width: '100%' }}>
            <a href={'https://www.twitter.com/paintonchain'} target={'_blank'} rel={'noreferrer'}>
                <Avatar alt="Twitter" src="/images/twitter.png" sx={{ backgroundColor: 'white', '&:hover': { opacity: .8 }, marginRight: 2 }} />
            </a>

            <a href={'https://www.opensea.com'} target={'_blank'} rel={'noreferrer'}>
                <Avatar alt="Open Sea" src="/images/opensea.png" sx={{ backgroundColor: 'white', '&:hover': { opacity: .8 }, marginRight: 2 }} />
            </a>

            <a href={'https://www.looksrare.com'} target={'_blank'} rel={'noreferrer'}>
                <Avatar alt="Looks Rare" src="/images/looksrare.png" sx={{ backgroundColor: 'white', '&:hover': { opacity: .8 }, marginRight: 2 }} />
            </a>

            {/* <a href={'https://www.discord.com'} target={'_blank'} rel={'noreferrer'}>
                <Avatar alt="Discord" src="/images/discord.png" sx={{ backgroundColor: 'white', '&:hover': { opacity: .8 }, marginRight: 2 }} />
            </a> */}

            <a href={'https://www.etherscan.com'} target={'_blank'} rel={'noreferrer'}>
                <Avatar alt="Discord" src="/images/etherscan.png" sx={{ backgroundColor: 'white', '&:hover': { opacity: .8 } }} />
            </a>
        </Grid>
    )
}