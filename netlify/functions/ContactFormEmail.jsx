import { Html, Head, Body, Container, Section, Text, Hr, Preview } from "@react-email/components";

export default function ContactFormEmail({
  nombre, empresa, telefono, email, newsletter, fecha
}) {
  return (
    <>
      <Html>
        <Head>
          <Preview>Contacto de landing Liquid Sound</Preview>
        </Head>
        <Body>
          <Container>
            <Section>
              <Text>
                Nuevo mensaje de la landing Liquid Sound
              </Text>
            </Section>
            <Hr/>
            <Section>
              <Text>
                <strong>Fecha:</strong> {fecha}
              </Text>
              <Text>
                <strong>Nombre:</strong> {nombre}
              </Text>
              {empresa && (
                <Text>
                  <strong>Empresa:</strong> {empresa}
                </Text>
              )}
              <Text>
                <strong>Teléfono:</strong> {telefono}
              </Text>
              <Text>
                <strong>Email:</strong> {email}
              </Text>
              <Text>
                <strong>Suscripto al newsletter:</strong> { newsletter ? "Sí" : "No"}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </>
  )
}