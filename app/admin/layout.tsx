export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en">
            <div className="w-screen bg-red-500 h-24"></div>


            {children}


        </div>
    );
}
