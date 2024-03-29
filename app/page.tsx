
import Curve from "./components/curve";
import Header from "./components/header";
import Info from "./components/info";
import Why from "./components/why";
import Form from "./components/form";
import Ready from "./components/ready";

export default function Home() {
  return (
    <div >  
      <Header />
      <Why />
      <Curve />
      <Info />
      <Ready />
      <Form />
    </div>
  );
}
