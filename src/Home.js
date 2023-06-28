import Advantages from "./Componenets/Advantages";
import Features from "./Componenets/Features";
import Footer from "./Componenets/Footer";
import Header from "./Componenets/Header";
import Offers from "./Componenets/Offers";
import Rewiews from "./Componenets/Rewiews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Advantages />
        <Offers />
        <Features />
        <Rewiews />
      </main>
      <Footer />
    </>
  );
}
