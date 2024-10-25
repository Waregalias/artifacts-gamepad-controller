import {Metadata} from "next";
import NavbarComponent from "../components/Navbar";
import {SidebarMenu} from "../components/Sidebar";


export const metadata: Metadata = {
  title: 'Api',
  description: 'API Key',
}

function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarComponent/>
      <div className="flex">
        <div className="hidden sm:block">
          <SidebarMenu/>
        </div>
        <main className="w-full controller">{children}</main>
      </div>
    </div>
  );
}


export default RootLayout;
