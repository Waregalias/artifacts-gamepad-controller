'use client'

function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <main className="w-full controller">{children}</main>
    </div>
  );
}


export default RootLayout;
