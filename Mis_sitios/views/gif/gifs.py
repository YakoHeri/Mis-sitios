import reflex as rx
import Mis_sitios.styles.styles as styles
from Mis_sitios.components.gif import gif_imagen
from Mis_sitios.styles.styles import Tamaño as Tamaño

def gif () ->rx.Component:
    return  rx.box(
        rx.hstack (
            gif_imagen(
            "back.png",
            "logo de programar"
        ),
             gif_imagen(
            "/argentina1.jpg",
            "logo de argentina"
            
        ),
        padding_right = Tamaño.SMALL.value,
        ),
        maxwidth = "600px",
        spacing= "8em",
        border_radius = "3px",
        width="100%",
        
    )