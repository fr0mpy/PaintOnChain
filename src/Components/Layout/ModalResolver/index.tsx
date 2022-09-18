import Backdrop from "@mui/material/Backdrop/Backdrop";
import { useAppSelector } from "../../../Redux/store";
import { MenuModal } from "./MenuModal";
import { MintModal } from "./MintModal";
import { WelcomeModal } from "./WelcomeModal";

export enum ModalType {
    Mint = 0,
    Menu = 1,
    Welcome = 2
}

export const ModalResolver = () => {
    const { modal } = useAppSelector(state => {
        return { modal: state.rootReducer.modal }
    });

    const renderModal = () => {
        switch (modal) {
            case ModalType.Mint:
                return <MintModal />
            case ModalType.Menu:
                return <MenuModal />
            case ModalType.Welcome:
                return <WelcomeModal />
            default:
                return null;
        }
    }


    return (
        <>
            {modal && <Backdrop open transitionDuration={400} />}
            {renderModal()}
        </>
    )
}