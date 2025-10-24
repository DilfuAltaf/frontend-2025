

export default function  Analisis({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en">
            <div className="w-screen bg-blue-500 h-24"></div>


            {children}


        </div>
    );
}
