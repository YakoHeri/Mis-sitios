import reflex as rx
import Mis_sitios.styles.styles as styles
from Mis_sitios.components.gif import gif_imagen
from Mis_sitios.styles.styles import Tamaño as Tamaño

def gif () ->rx.Component:
    return rx.hstack(
        gif_imagen(
            "/giphy.GIF"
        ),
        gif_imagen(
            "/hola.GIF",
            
        ),
        spacing= "7em",
    )