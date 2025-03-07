'use client'

function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full p-2 controller">{children}</main>
  );
}


export default RootLayout;
