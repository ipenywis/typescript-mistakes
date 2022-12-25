/*
- Partial
- Record
...
*/

//Product ✅

interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
}

// interface IUpdateProduct {
//   title?: string;
//   description?: string;
//   thumbnail?: string;
//   price?: number;
//   rating?: number;
// }

function updateProduct(
  productId: IProduct["id"],
  updatedProduct: Partial<Omit<IProduct, "id">>
) {
  // updatedProduct.
}

//Record ✅

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const color: Record<Properties, RGB | string> = {
  red: [255, 0, 0],
  green: "green",
  blue: "blue",
};

export {};
