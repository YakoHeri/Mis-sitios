import reflex as rx
from Mis_sitios.components.link_icon import link_icon
from Mis_sitios.components.informacion import info_text
from Mis_sitios.styles.styles import Tamaño as Tamaño
from Mis_sitios.styles.colores import colorTexto as colorTexto
from Mis_sitios.styles.colores import colores as colores


def header () -> rx.Component :
    return rx.vstack(
        rx.hstack(
        rx.avatar(
            name="Yako Hernandez Iraguen",
            size="xl",
            src= "avatar.png",
            color = colorTexto.BODY.value,
            bg = colores.CONTENIDO.value,
            padding= "2px",
            border= "4px",
            border_color = colores.PRIMARIO.value
                  ),
            rx.vstack(
                rx.heading (
                    "Yako Hernandez Iraguen",
                    size="lg"
                    ),
                rx.text (
                    "@YakoDev",
                    margin_top= Tamaño.ZERO.value,
                    color = colorTexto.BODY.value

                    ),
                    rx.hstack(
                        link_icon ("https://twitter.com/IragYako",
                                   "/iconos/twitter.svg",
                                   "Twitter"),
                        link_icon ("https://www.instagram.com/yako_hernandez/",
                                   "/iconos/instagram.svg",
                                   "Instagram"),
                        link_icon ("https://github.com/YakoHeri",
                                   "/iconos/github.svg",
                                   "github"),
                        spacing="1em",
                        size = Tamaño.BIG.value,
                    ),
                    align_items= "start", 
                    width = "100%" ,  
                    
                    
            ),
            
        ),
         rx.flex (
                info_text("1", "Año de experiencia"),
                rx.spacer(),
                info_text("< >", "En constante capacitación"),
                rx.spacer(),
                info_text("@", " Abierto a nuevos retos"),
                width= "100%",
                color = colorTexto.Header.value,
                font_size= Tamaño.MEDIUM2.value
            ),

          rx.text (f""" ¡Bienvenidos a mi pagina! Soy un apasionado desarrollador argentino de 23 años 
                    especializado en Full Stack Python y la librería Reflex.
                    Actualmente trabajo como freelancer, pero estoy ansioso por llevar mi dedicación
                    al siguiente nivel, y es por eso que estoy buscando mas oportunidades. 
                    Aquí encontrarás una muestra de mis trabajos y proyectos. 
                    Explora los enlaces a continuación para sumergirte en mi mundo de desarrollo y 
                    descubrir cómo puedo aportar valor a tu equipo o proyecto.""",
                    color = colorTexto.BODY.value,
                    font_size= Tamaño.MEDIUM2.value  
                    ),
          spacing= "2em",
          align_items= "start",
          width = "100%" ,
          font_size = Tamaño.DEFAULT.value,

    )