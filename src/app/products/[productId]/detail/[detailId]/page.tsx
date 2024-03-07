import { notFound } from "next/navigation";

export default function ProductDetails({params }:{params:{detailId:string}}){
  console.log(params);
  if (parseInt(params.detailId) > 10) {
    notFound();
  }
  return (
    <>
      <h1>Details about Product{params.detailId}</h1>
    </>
  );
}
