
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": ["300"]}}>
  <HStack sx={{"position": "sticky", "backgroundColor": ["#333333"], "paddingX": ["0.7em"], "paddingY": ["0.7em"], "zIndex": "999", "top": "0"}}>
  <Box sx={{"styles": "Comfortaa", "fontWeight": ["300"], "fontFamily": "Comfortaa"}}>
  <Text as={`span`} sx={{"color": ["#3498DB"]}}>
  {`Yako`}
</Text>
  <Text as={`span`} sx={{"color": ["#2977A8"]}}>
  {`dev`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": ["2em"], "padding": ["2em"]}}>
  <VStack alignItems={`start`} spacing={`2em`} sx={{"width": "100%", "fontSize": ["1em"]}}>
  <HStack>
  <Avatar name={`Yako Hernandez Iraguen`} size={`xl`} src={`avatar.png`} sx={{"color": "#CCCCCC", "bg": ["#333333"], "padding": "2px", "border": "4px", "borderColor": ["#3498DB"]}}/>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"size": "lg", "color": "#FFFFFF"}}>
  {`Yako Hernandez Iraguen`}
</Heading>
  <Text sx={{"marginTop": ["0px !important"], "color": "#CCCCCC"}}>
  {`@YakoDev`}
</Text>
  <HStack spacing={`1em`} sx={{"size": ["2em"]}}>
  <Link as={NextLink} href={`https://twitter.com/IragYako`} isExternal={true} sx={{"size": ["2em"], "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Twitter`} src={`/iconos/twitter.svg`} sx={{"width": ["1.3em"]}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/yako_hernandez/`} isExternal={true} sx={{"size": ["2em"], "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Instagram`} src={`/iconos/instagram.svg`} sx={{"width": ["1.3em"]}}/>
</Link>
  <Link as={NextLink} href={`https://github.com/YakoHeri`} isExternal={true} sx={{"size": ["2em"], "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`github`} src={`/iconos/github.svg`} sx={{"width": ["1.3em"]}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%", "color": "#FFFFFF", "fontSize": "0.85em"}}>
  <Box sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Comfortaa", "fontWeight": ["300"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#3498DB"]}}>
  {`1`}
</Text>
  {` Año de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Comfortaa", "fontWeight": ["300"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#3498DB"]}}>
  {`< >`}
</Text>
  {` En constante capacitación`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Comfortaa", "fontWeight": ["300"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#3498DB"]}}>
  {`@`}
</Text>
  {`  Abierto a nuevos retos`}
</Box>
</Flex>
  <Text sx={{"color": "#CCCCCC", "fontSize": "0.85em"}}>
  {` ¡Bienvenidos a mi pagina! Soy un apasionado desarrollador argentino de 23 años 
                    especializado en Full Stack Python y la librería Reflex.
                    Actualmente trabajo como freelancer, pero estoy ansioso por llevar mi dedicación
                    al siguiente nivel, y es por eso que estoy buscando mas oportunidades. 
                    Aquí encontrarás una muestra de mis trabajos y proyectos. 
                    Explora los enlaces a continuación para sumergirte en mi mundo de desarrollo y 
                    descubrir cómo puedo aportar valor a tu equipo o proyecto.`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`md`} sx={{"width": "100%", "paddingTop": ["1em"], "size": "lg", "color": "#FFFFFF"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.linkedin.com/feed/`} isExternal={true} sx={{"size": ["1em"], "target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "whiteSpace": "normal", "textAlign": "start", "alignItems": "start", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Linkedin`} src={`/iconos/linkedin.svg`} sx={{"width": ["2em"], "height": ["2em"], "margin": ["0.7em"]}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": ["0px !important"], "paddingY": ["0.5em"], "paddingRight": ["0.5em"]}}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontSize": "0.85em", "color": "#00000", "fontFamily": "Poppins", "fontWeight": ["300"]}}>
  {`Te invito a ver mis estudios y certificados `}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/YakoHeri`} isExternal={true} sx={{"size": ["1em"], "target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "whiteSpace": "normal", "textAlign": "start", "alignItems": "start", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Github`} src={`/iconos/github.svg`} sx={{"width": ["2em"], "height": ["2em"], "margin": ["0.7em"]}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": ["0px !important"], "paddingY": ["0.5em"], "paddingRight": ["0.5em"]}}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "0.85em", "color": "#00000", "fontFamily": "Poppins", "fontWeight": ["300"]}}>
  {`Podes revisar mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/yako_hernandez/`} isExternal={true} sx={{"size": ["1em"], "target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "whiteSpace": "normal", "textAlign": "start", "alignItems": "start", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Instagram`} src={`/iconos/instagram.svg`} sx={{"width": ["2em"], "height": ["2em"], "margin": ["0.7em"]}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": ["0px !important"], "paddingY": ["0.5em"], "paddingRight": ["0.5em"]}}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontSize": "0.85em", "color": "#00000", "fontFamily": "Poppins", "fontWeight": ["300"]}}>
  {`Mis redes donde podes conocerme un poco mas`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitter.com/IragYako`} isExternal={true} sx={{"size": ["1em"], "target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "whiteSpace": "normal", "textAlign": "start", "alignItems": "start", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Twitter`} src={`/iconos/twitter.svg`} sx={{"width": ["2em"], "height": ["2em"], "margin": ["0.7em"]}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": ["0px !important"], "paddingY": ["0.5em"], "paddingRight": ["0.5em"]}}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Twitter`}
</Text>
  <Text sx={{"fontSize": "0.85em", "color": "#00000", "fontFamily": "Poppins", "fontWeight": ["300"]}}>
  {`Revisa mis actualizaciones diarias`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`md`} sx={{"width": "100%", "paddingTop": ["1em"], "size": "lg", "color": "#FFFFFF"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`https://wa.me/2314615853`} isExternal={true} sx={{"size": ["1em"], "target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "whiteSpace": "normal", "textAlign": "start", "alignItems": "start", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Contacto`} src={`/iconos/llamar.svg`} sx={{"width": ["2em"], "height": ["2em"], "margin": ["0.7em"]}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": ["0px !important"], "paddingY": ["0.5em"], "paddingRight": ["0.5em"]}}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Contacto`}
</Text>
  <Text sx={{"fontSize": "0.85em", "color": "#00000", "fontFamily": "Poppins", "fontWeight": ["300"]}}>
  {`Establece contacto conmigo de manera rapida`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`yakoirag@gmail.com`} isExternal={true} sx={{"size": ["1em"], "target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "whiteSpace": "normal", "textAlign": "start", "alignItems": "start", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Email`} src={`/iconos/correo.svg`} sx={{"width": ["2em"], "height": ["2em"], "margin": ["0.7em"]}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": ["0px !important"], "paddingY": ["0.5em"], "paddingRight": ["0.5em"]}}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": "0.85em", "color": "#00000", "fontFamily": "Poppins", "fontWeight": ["300"]}}>
  {`Enviame un correo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://wa.me/2314615853`} isExternal={true} sx={{"size": ["1em"], "target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "whiteSpace": "normal", "textAlign": "start", "alignItems": "start", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Whatsapp`} src={`/iconos/whatsapp.svg`} sx={{"width": ["2em"], "height": ["2em"], "margin": ["0.7em"]}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": ["0px !important"], "paddingY": ["0.5em"], "paddingRight": ["0.5em"]}}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Whatsapp`}
</Text>
  <Text sx={{"fontSize": "0.85em", "color": "#00000", "fontFamily": "Poppins", "fontWeight": ["300"]}}>
  {`Enviame un mensaje ante cualquier consulta`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <Box sx={{"maxwidth": "600px", "spacing": "8em", "borderRadius": "3px", "width": "100%", "fontFamily": "Comfortaa", "fontWeight": ["300"]}}>
  <HStack sx={{"paddingRight": ["0.5em"]}}>
  <ChakraImage alt={`logo de programar`} src={`back.png`} sx={{"margin": ["1em"], "height": "8em", "width": "100%", "alignItems": "start", "borderRadius": "10px", "border": "10px"}}/>
  <ChakraImage alt={`logo de argentina`} src={`/argentina1.jpg`} sx={{"margin": ["1em"], "height": "8em", "width": "100%", "alignItems": "start", "borderRadius": "10px", "border": "10px"}}/>
</HStack>
</Box>
</VStack>
</Center>
  <VStack sx={{"marginBottom": ["2em"], "paddingBottom": ["2em"], "paddingY": ["2em"], "fontSize": ["0.7em"], "color": "#999999", "width": "100%"}}>
  <ChakraImage alt={`logoipo de Yakodev.`} src={`/logo.png`} sx={{"height": "8em", "weight": "8em"}}/>
  <Text>
  {`2022-2023 YAKODEV BY YAKO HERNANDEZ IRAGUEN`}
</Text>
  <Text sx={{"marginTop": ["0px !important"]}}>
  {`BUILDING SOFTWARE FROM ARGENTINA TO THE WORLD.`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Yakodev   //  mi carta de presentacion`}
</title>
  <meta content={`Hola!! Mi nombre es Yako Hernandez Iraguen. Soy un apasionado desarrollador argentino de 23 años especializado en Full Stack Python y la librería Reflex.`} name={`description`}/>
  <meta content={`/avatar.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
