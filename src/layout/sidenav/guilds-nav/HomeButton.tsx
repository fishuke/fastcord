import {FaDiscord} from "react-icons/all";
import SidenavIcon from "./GuildItem";

const HomeButton = () => {
    return (
        <SidenavIcon icon={<FaDiscord size={28} />} text="Home" />
    )
}
export default HomeButton;
