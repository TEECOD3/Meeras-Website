import Sidebar from "@/components/UI/Sidebar";
import "../../../globals.css";
export const metadata = {
  title: "Admin",
  description: "Admin page for Meerasblog",
  icons: {
    icon: "/Meeraslogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <section>
        <Sidebar>
          <section> {children} </section>
        </Sidebar>
      </section>
    </section>
  );
}
