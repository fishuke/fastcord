import GuildsNav from "./sidenav/guilds-nav/GuildsNav";
import FriendsNav from "./sidenav/friends-nav/FriendsNav";

const Layout = () => {
    return (
        <div className="flex flex-row w-full h-screen w-full bg-background-primary">
            <GuildsNav />
            <FriendsNav />
        </div>
    )
}
export default Layout;
