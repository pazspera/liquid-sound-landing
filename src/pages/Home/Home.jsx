import Hero from "../../sections/Hero/Hero";
import PorQueElegirnos from "../../sections/PorQueElegirnos/PorQueElegirnos";
import NuestrosProductos from "../../sections/NuestrosProductos/NuestrosProductos";
import ProductosSector from "../../sections/ProductosSector/ProductosSector";
import QuienesSomos from "../../sections/QuienesSomos/QuienesSomos";
import NuestrosClientes from "../../sections/NuestrosClientes/NuestrosClientes";
import Contacto from "../../sections/Contacto/Contacto";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Liquid Sound");
  
  return (
    <>
      <Hero></Hero>
      <PorQueElegirnos></PorQueElegirnos>
      <NuestrosProductos></NuestrosProductos>
      <ProductosSector></ProductosSector>
      <QuienesSomos></QuienesSomos>
      <NuestrosClientes></NuestrosClientes>
      <Contacto></Contacto>
    </>
  )
}