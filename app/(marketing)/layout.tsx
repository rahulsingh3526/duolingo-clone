import { Header } from "./header";

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
    </div>
  );
};

export default MarketingLayout;
