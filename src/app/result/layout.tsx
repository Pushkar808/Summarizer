export default function ResultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-white md:p-4">
            {children}
        </div>
    );
}