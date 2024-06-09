import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        {" "}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
