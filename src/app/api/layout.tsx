'use client'

function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full controller">{children}</main>
  );
}


export default RootLayout;
