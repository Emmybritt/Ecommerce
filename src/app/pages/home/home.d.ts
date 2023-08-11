type ProductDataAtrr = {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: string;
  deliveryTimeSpan: string;
  categoryId: 4;
  productImageUrl: string;
  categoryName: string;
};

type ProductListAttr = {
  message: string;
  result: boolean;
  data: ProductDataAtrr[];
};

type CartAttr = {
  CartId: number;
  CustId: number;
  ProductId: number;
  Quantity: number;
  AddedDate: string;
};

type CartITemsAttr = {
  cartId: number;
  custId: number;
  productId: number;
  quantity: number;
  addedDate: string;
  productName: string;
  categoryName: string;
  productImageUrl: string;
  productPrice: number;
};
