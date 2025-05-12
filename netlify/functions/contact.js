import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {

  if(event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not found" };
  }

  const data = JSON.parse(event.body);
  const { nombre, empresa, telefono, email, newsletter } = data;

  try {
    const response = await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      to: ['delivered@resend.dev'],
      subject: "Mensaje formulario landing",
      text: `Nombre: ${nombre} - Empresa: ${empresa} - Teléfono: ${telefono} - Email: ${email} - Newsletter: ${newsletter ? "Sí" : "No"}`.trim()
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: response.id }),
      headers: {
        'Access-Control-Allow-Origin': '*',  
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }

}