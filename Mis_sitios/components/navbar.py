import reflex as rx
from Mis_sitios.styles.styles import Tamaño as Tamaño
from Mis_sitios.styles.colores import colores as colores
from Mis_sitios.styles.colores import colorTexto as colorTexto
import Mis_sitios.styles.styles as styles

def navBar () -> rx.Component: 
    return rx.hstack(
        rx.box(
            rx.span ("Yako", color =colores.PRIMARIO.value),
            rx.span ("dev", color= colores.TERCER.value),
            styles= styles.fuente.LOGO.value
        ),
        position= "sticky",
        background_color = colores.CONTENIDO.value,
        padding_x= Tamaño.MEDIUM.value,
        padding_y= Tamaño.MEDIUM.value,
        z_index="999",
        top = "0",
        
    )
    