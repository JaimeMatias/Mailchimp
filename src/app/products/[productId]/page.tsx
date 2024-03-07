import { Metadata } from "next";

export const generateMetadata= ({params}:Props):Metadata=>{
  return {
    title: `Product ${params.productId}`
  }
}
type Props = {
  params:{
    productId: string
  }
}

export default function ProductDetails({ params }:Props) {
    console.log(params)
  return (
    <>
      <h1>Details about Product{params.productId}</h1>
    </>
  );
}
