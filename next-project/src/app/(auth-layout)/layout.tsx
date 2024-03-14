export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Auth layout</h2>
      {children}
    </section>
  );
}
