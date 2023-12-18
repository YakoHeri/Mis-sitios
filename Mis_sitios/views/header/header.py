import reflex as rx
from Mis_sitios.components.link_icon import link_icon
from Mis_sitios.styles.styles import Tamaño as Tamaño

def header () -> rx.Component :
    return rx.vstack(
        rx.hstack(
        rx.avatar(name="Yako Hernandez Iraguen", size="xl"),
            rx.vstack(
                rx.heading (
                    "Yako Hernandez Iraguen",
                    size="md"
                    ),
                rx.text (
                    "@YakoDev",
                    padding_top= "0px !important"

                    ),
                    rx.hstack(
                        link_icon ("https://twitter.com/IragYako"),
                        link_icon ("https://twitter.com/IragYako"),
                        link_icon ("https://twitter.com/IragYako"),
                        link_icon ("https://twitter.com/IragYako"),
                    ),
                    align_items= "start", 
                    width = "100%" ,  
            ),
        ),
         
          rx.text ("texto descriptivo"),
          spacing= "2em",
          align_items= "start",
          width = "100%" ,

    )