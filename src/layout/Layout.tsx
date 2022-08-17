import GuildsNav from "./sidenav/guilds-nav/GuildsNav";
import FriendsNav from "./sidenav/friends-nav/FriendsNav";
import ContentBody from "./sidenav/chat/ContentBody";
const Layout = () => {
    return (
        <div className="flex flex-row w-full h-screen w-full bg-background-primary">
            <GuildsNav />
            <FriendsNav />

            <div className='flex-1 flex justify-between'>
           
            <ContentBody />
           
            </div>
        </div>
    )
}
export default Layout;
