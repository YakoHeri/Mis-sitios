import reflex as rx
import Mis_sitios.styles.styles as styles
from Mis_sitios.styles.styles import  Tamaño as Tamaño

def gif_imagen (image:str, alt =str) ->  rx.Component:
    return rx.image(
        margin = Tamaño.DEFAULT.value,   
        height = Tamaño.VERYBIG.value,
        src=image,
        width ="100%",
        align_items= "start",
        border_radius = "10px",
        border = "10px",
        alt=alt
         
    )