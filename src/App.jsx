import { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);

  for (let i = 1; i <= 8; i++) {
    let obj = { id: i, txt: "Add to Cart" };
    btnText.push(obj);
  }

  let cardDetails = [
    {
      id: 1,
      TopSale: true,
      cardImg:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHcVrxUuH0UzuKBw5UenMiviMbuyy8ncOGjFeV89EIPtGl0tkoFfHVcz9dUvv-1YIfUcNDCW6EzEa5DIKOi4okBGuOnxyza-uko_mV2affbME9h5VzFPPHww",
      productName: "Football Portugal Jersey Ronaldo 7 ",
      starRating: 4,
      mrp: 159.38,
      offer: 20,
      btnTxt: btnText[0].txt,
    },
    {
      id: 2,
      TopSale: false,
      cardImg:
        "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/j/a/jacob-co-epic-x-ex120-10-ad-aa-abrua-large_1_1.jpg",
      productName: "JACOB & CO.Heart ofCR7",
      starRating: 5,
      mrp:3000000,
      offer: 25,
      btnTxt: btnText[1].txt,
    },
    {
      id: 3,
      TopSale: true,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9b533c1-a480-4873-9ca8-2f75f5d8bd77/superfly-9-academy-mercurial-dream-speed-mg-high-top-football-boot-1trJtC.png",
      productName: "Nike Superfly 9 Academy Mercurial Dream Speed",
      starRating: 4,
      mrp: 8995 ,
      offer: 10,
      btnTxt: btnText[2].txt,
    },
    {
      id: 4,
      TopSale: false,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/71baf215-c617-4c8c-b26f-67220f0330ea/vapor-15-academy-mercurial-dream-speed-tf-low-top-football-shoes-rBsMcd.png",
      productName: "Nike Vapor 15 Academy Mercurial Dream Speed",
      starRating: 4,
      mrp: 8067,
      offer: 25,
      btnTxt: btnText[3].txt,
    },
    {
      id: 5,
      TopSale: true,
      cardImg:
        "https://m.media-amazon.com/images/I/7169wfbs4vL._SX569_.jpg",
      productName: "QUOTE - UNQUOTE ART Cristiano Ronaldo Framed Illustration",
      starRating: 4,
      mrp: 669,
      offer: 30,
      btnTxt: btnText[4].txt,
    },
    {
      id: 6,
      TopSale: true,
      cardImg:
        "https://cr7fragrances.store/cdn/shop/files/Untitleddesign_90df4a92-db67-4c38-a35e-68f10316fae7_600x.jpg?v=1689753222",
      productName: "cristiano ronaldo fearless eau de toilette",
      starRating: 5,
      mrp: 2778,
      offer: 17,
      btnTxt: btnText[5].txt,
    },
    {
      id: 7,
      TopSale: true,
      cardImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a82a3517-40a1-4532-8bd5-972a3c88d20e/zoom-mercurial-superfly-9-academy-km-mg-multi-ground-high-top-football-boot-jxdjk2.png",
      productName: "Nike Zoom Mercurial Superfly 9 Academy KM MG",
      starRating: 4,
      mrp: 352.55,
      offer: 27,
      btnTxt: btnText[6].txt,
    },
    {
      id: 8,
      TopSale: false,
      cardImg:
        "https://m.media-amazon.com/images/I/51yBvRJWEML._SX300_SY300_QL70_FMwebp_.jpg",
      productName: "SINCE 7 STORE Cristiano Ronaldo Legendary Career Framed Poster",
      starRating: 3,
      mrp: 999,
      offer: 60,
      btnTxt: btnText[7].txt,
    },
  ];

  let press = (product) => {
    let foundButton = btnText.find((ele) => product.id === ele.id);
    // console.log(btnElement);

    if (foundButton.txt === "Add to Cart") {
      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            // console.log({ ...btn, txt: "Remove from Cart" });
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    } else if (foundButton.txt === "Remove from Cart") {
      setCartData(cartData.filter((ele) => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
  };
  return (
    <div>
      <Navbar navDetails={cartData} />
      <Header />
      <section className="content-section py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cardDetails.map((card, index) => {
              return <Card key={index++} props={card} press={press} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;