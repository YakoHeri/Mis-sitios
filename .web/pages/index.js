
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Button, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack>
  <HStack sx={{"position": "sticky", "bg": "blue", "paddingX": "16px", "paddingY": "8px", "zIndex": "999"}}>
  <Text sx={{"height": "40px"}}>
  {`YakoDev`}
</Text>
</HStack>
  <VStack>
  <Avatar name={`Yako Hernandez iraguen`} size={`md`}/>
  <Text>
  {`@yakoDev`}
</Text>
  <Text>
  {`HOLA!! MI NOMBRE ES YAKO HERNANDEZ IRAGUEN`}
</Text>
  <Text>
  {`texto descriptivo`}
</Text>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://www.linkedin.com/feed/`}>
  <Button>
  {`Linkedin`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/YakoHeri`}>
  <Button>
  {`Github`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/`}>
  <Button>
  {`Instagram`}
</Button>
</Link>
  <Link as={NextLink} href={`https://wa.me/2314615853`}>
  <Button>
  {`Whatsapp`}
</Button>
</Link>
</VStack>
  <VStack>
  <ChakraImage src={`/favicon.ico`}/>
  <Text>
  {`2022-2023 YAKODEV BY YAKO HERNANDEZ IRAGUEN BUILDING SOFTWARE FROM ARGENTINA TO THE WORLD.`}
</Text>
</VStack>
</VStack>
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
