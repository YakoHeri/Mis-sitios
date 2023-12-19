import reflex as rx
from Mis_sitios.styles.styles import Tamaño as Tamaño
from Mis_sitios.styles.colores import colorTexto as colorTexto
from Mis_sitios.styles.colores import colores as colores

def info_text (title: str, body: str)-> rx.Component:
    return rx.box (
        rx.span(title, 
                font_weight = "bold", 
                color = colores.PRIMARIO.value
        ),
        f" {body}",
        font_size = Tamaño.DEFAULT.value,
        color =   colorTexto.Header.value,
    )       