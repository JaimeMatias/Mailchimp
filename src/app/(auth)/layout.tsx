export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>Auth Layout</h2>
      {children}
    </>
  );
}
