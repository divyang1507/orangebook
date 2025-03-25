'use client'
import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import { useProducts } from "./Context/ProductContext";

export default function Home() {
  const {products, loading} = useProducts();
  return (
 <div>

  <HeroSlider/>
 <div className="flex gap-8 flex-wrap justify-center items-center">
  {products.map((item,id)=>{
    return (<div key={id}>
      <ProductCard item={item}/></div>)
  })}
 </div>
 </div>
  );
}
