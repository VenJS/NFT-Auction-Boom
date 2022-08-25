import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";
import data from "../../data/nfts.json";

export default function How() {
  console.log(data);
  return (
    <div>
      <Header></Header>
      <Hero text="How it works"></Hero>
      <Description
        text="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
        image="https://preview.redd.it/x5tdrjinpxw71.jpg?auto=webp&s=7a0e5f8dee568c7129082176c4ee661d799cfe16"
      ></Description>
      <Footer></Footer>
    </div>
  );
}
