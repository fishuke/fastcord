import {FaChair, FaHooli, FaRocket, FaWrench, SiStarbucks} from "react-icons/all";
import HomeButton from "./HomeButton";
import GuildSeparator from "./GuildSeparator";
import GuildItem from "./GuildItem";

// TODO ADD EXPLORE AND ADD A SERVER BUTTON

const GuildsNav = () => {
    const guilds = [
        {
            name: 'Stalk',
            icon: <FaRocket size={28}/>,
        },
        {
            name: 'Wrench',
            icon: <FaWrench size={28}/>,
        },
        {
            name: 'Chair',
            icon: <FaChair size={28}/>,
        },
        {
            name: 'Hooli',
            icon: <FaHooli size={28}/>,
        },
        {
            name: 'Starbucks',
            icon: <SiStarbucks size={28}/>,
        }
    ]

    return (
        <div className="flex h-screen bg-background-tertiary w-18 ">
            <div className="w-full m-0 pt-3 flex flex-col  items-center text-white shadow-lg">
                <HomeButton/>
                <GuildSeparator/>
                {guilds.map(guild => <GuildItem key={guild.name} icon={guild.icon} text={guild.name}/>)}
            </div>
        </div>
    )
}
export default GuildsNav;
