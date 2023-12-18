
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Heading, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "lightgrey", "paddingX": ["1em"], "paddingY": ["0.5em"], "zIndex": "999", "top": "0"}}>
  <Text>
  {`YakoDev`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": ["2em"]}}>
  <VStack alignItems={`start`} spacing={`2em`} sx={{"width": "100%"}}>
  <HStack>
  <Avatar name={`Yako Hernandez Iraguen`} size={`xl`}/>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <Heading size={`md`}>
  {`Yako Hernandez Iraguen`}
</Heading>
  <Text sx={{"paddingTop": "0px !important"}}>
  {`@YakoDev`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://twitter.com/IragYako`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/IragYako`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/IragYako`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/IragYako`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Text>
  {`texto descriptivo`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": ["1em"]}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.linkedin.com/feed/`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"]}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontSize": ["0,8em"]}}>
  {`Te invito a ver mis estudios y certificados `}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/YakoHeri`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"]}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": ["0,8em"]}}>
  {`Podes revisar mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"]}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontSize": ["0,8em"]}}>
  {`Mis redes donde podes conocerme un poco mas`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://wa.me/2314615853`} isExternal={true} sx={{"target": "_blank", "width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "borderRadius": ["2em"]}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["2em"], "height": ["2em"]}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`Whatsapp`}
</Text>
  <Text sx={{"fontSize": ["0,8em"]}}>
  {`Enviame un mensaje ante cualquier consulta`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack>
  <ChakraImage src={`/favicon.ico`}/>
  <Text>
  {`2022-2023 YAKODEV BY YAKO HERNANDEZ IRAGUEN BUILDING SOFTWARE FROM ARGENTINA TO THE WORLD.`}
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
