import assets from "@/assets";
import { CarBrand } from "@/types";

const CarsBrands: CarBrand[] = [
  {
    id: "toyota",
    name: "Toyota",
    type: "regular",
    models: [
      {
        id: "t_corrola",
        name: "Corrolla",
        images: [{ color: { code: "", name: "" }, img: assets.carBg }],
      },
    ],
  },
  {
    id: "tesla",
    name: "Tesla",
    type: "luxury",
    models: [
      {
        id: "tl_s",
        name: "Model_S",
        images: [
          { color: { code: "#000", name: "black" }, img: assets.testla_s },
        ],
      },
    ],
  },
];

export default CarsBrands;
