import { render } from "@react-email/render";
import dotenv from "dotenv";
import ContactFormEmail from "../../src/emails/ContactFormEmail";

dotenv.config();

const EMAIL_JS_SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID;
const EMAIL_JS_PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY;
const EMAIL_JS_PRIVATE_KEY = process.env.EMAIL_JS_PRIVATE_KEY;
const EMAIL_JS_TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID;

export async function handler(event) {

  if(event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not found" };
  }

  try {
    const data = JSON.parse(event.body);
    const { nombre, empresa, telefono, email, newsletter, fecha } = data;

    const emailHtml = render(
      <ContactFormEmail
        nombre={nombre}
        empresa={empresa}
        telefono={telefono}
        email={email}
        newsletter={newsletter}
        fecha={fecha}
      />
    );

    const templateParams = {
      from_name: nombre,
      from_email: email,
      to_email: "contacto.landing.liquidsound@gmail.com",
      subject: `Mensaje contacto de ${nombre} - Landing`,
      html_content: emailHtml,
    }

    const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: EMAIL_JS_SERVICE_ID,
        template_id: EMAIL_JS_TEMPLATE_ID,
        user_id: EMAIL_JS_PUBLIC_KEY,
        accessToken: EMAIL_JS_PRIVATE_KEY,
        template_params: templateParams, 
      })
    })

    if(!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text();
      throw new Error(`EmailJS error: ${emailJsResponse.status} - ${errorText}`);
    }

    const responseData = await emailJsResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: response.id, message: "Email enviado exitosamente" }),
      headers: {
        'Access-Control-Allow-Origin': '*',  
      },
    };
  } catch (error) {
    console.log("Error al procesar el formulario con Emailjs;", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }

}