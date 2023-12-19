
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "backgroundColor": ["#333333"], "paddingX": ["0.7em"], "paddingY": ["0.7em"], "zIndex": "999", "top": "0"}}>
  <Box sx={{"styles": {"fontFamily": "Comfortaa-Medium", "fontSize": ["1.3em"]}}}>
  <Text as={`span`} sx={{"color": ["#3498DB"]}}>
  {`Yako`}
</Text>
  <Text as={`span`} sx={{"color": ["#2977A8"]}}>
  {`dev`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": ["2em"]}}>
  <VStack alignItems={`start`} spacing={`2em`} sx={{"width": "100%", "fontSize": ["1em"]}}>
  <HStack>
  <Avatar name={`Yako Hernandez Iraguen`} size={`xl`}/>
  <VStack alignItems={`start`} spacing={`1em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"color": "#FFFFFF", "marginTop": ["0px !important"]}}>
  {`Yako Hernandez Iraguen`}
</Heading>
  <Text sx={{"marginTop": ["0px !important"], "color": "#CCCCCC"}}>
  {`@YakoDev`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://twitter.com/IragYako`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/yako_hernandez/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://github.com/YakoHeri`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%", "color": "#FFFFFF"}}>
  <Box sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#3498DB"]}}>
  {`1`}
</Text>
  {` Año de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#3498DB"]}}>
  {`<>`}
</Text>
  {` En constante capacitación`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#3498DB"]}}>
  {`@`}
</Text>
  {`  Abierto a nuevos retos`}
</Box>
</Flex>
  <Text sx={{"color": "#CCCCCC"}}>
  {` ¡Bienvenidos a mi pagina! Soy un apasionado desarrollador argentino de 23 años 
                    especializado en Full Stack Python y la librería Reflex.
                    Actualmente trabajo como freelancer, pero estoy ansioso por llevar mi dedicación
                    al siguiente nivel, y es por eso que estoy buscando mas oportunidades. 
                    Aquí encontrarás una muestra de mis trabajos y proyectos. 
                    Explora los enlaces a continuación para sumergirte en mi mundo de desarrollo y 
                    descubrir cómo puedo aportar valor a tu equipo o proyecto.`}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": ["1em"], "color": "#FFFFFF"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.linkedin.com/feed/`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Te invito a ver mis estudios y certificados `}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/YakoHeri`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Podes revisar mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Mis redes donde podes conocerme un poco mas`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://wa.me/2314615853`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Whatsapp`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Enviame un mensaje ante cualquier consulta`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": ["1em"], "color": "#FFFFFF"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.linkedin.com/feed/`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Te invito a ver mis estudios y certificados `}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/YakoHeri`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Podes revisar mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Mis redes donde podes conocerme un poco mas`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://wa.me/2314615853`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"], "backgroundColor": ["#333333"], "color": "#CCCCCC", "_hover": {"backgroundColor": ["#05183c"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#FFFFFF"}}>
  {`Whatsapp`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#00000"}}>
  {`Enviame un mensaje ante cualquier consulta`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": ["2em"], "paddingBottom": ["2em"], "fontSize": ["0.7em"], "color": "#999999"}}>
  <ChakraImage src={`/favicon.ico`}/>
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
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
