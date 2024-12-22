import {Metadata} from "next";
import NavbarComponent from "../components/Navbar";
import {SidebarMenu} from "../components/Sidebar";

export const metadata: Metadata = {
  title: 'API Key',
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
        <main className="flex justify-center w-full mt-3">{children}</main>
      </div>
    </div>
  );
}


export default RootLayout;
