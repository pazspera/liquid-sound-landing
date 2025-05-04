import useDocumentTitle from "../../hooks/useDocumentTitle"
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import NoticeSection from "../../components/NoticeSection/NoticeSection";

export default function ThankYou() {
  const theme = useTheme();
  useDocumentTitle("Gracias por contactarnos - Liquid Sound"); 

  return (
    <>
      <NoticeSection 
        title={"¡Gracias por contactarnos!"} 
        message={"Su mensaje fue enviado."} 
        secondaryMessage={"Nuestro equipo se pondrá en contacto a la brevedad."} 
      />
    </>
  )
}