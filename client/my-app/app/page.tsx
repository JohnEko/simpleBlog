import Image from "next/image";
import PropertyItems from "./component/property/PropertyItems";


export default function Home() {
  return (
    <main>
          <PropertyItems /> 
          <PropertyItems />
          <PropertyItems />
       
    </main>
  );
}
