import GuildsNav from "./sidenav/guilds-nav/GuildsNav";
import FriendsNav from "./sidenav/friends-nav/FriendsNav";
import ContentBody from "./sidenav/chat/ContentBody";
import UserSidebar from "./sidebar/userSidebar";
import TopBar from "./topbar/topBar";

const Layout = () => {
    return (
       

<div className='flex'>
{/* Icon left sidebar */}
{/* <IconSideBar /> */}
<div className='flex flex-1 flex-col min-h-screen h-screen '>
  {/* Top bar */}
  <TopBar />
  {/* End of top bar */}

  {/* Body */}
  <div className='flex-1 bg-blue-500 flex overflow-y-hidden'>
	{/* Left side bar */}
	
	<GuildsNav />
            <FriendsNav />
	{/* End of left sidebar */}
	<div className='flex-1 flex justify-between'>
	  {/* Main content area */}
	  <ContentBody />
	  
	  {/* End of main content */}
	  {/* User sidebar */}
	  <UserSidebar />
	  
	  {/* End of user sidebar */}
	</div>
  </div>
  {/* Body */}
</div>
</div>
    )
}
export default Layout;
