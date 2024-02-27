import UserProvider from "../../provider";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <section>{children}</section>
    </UserProvider>
  );
}
