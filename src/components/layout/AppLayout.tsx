import Footer from "./Footer";
import Header from "./Header";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
