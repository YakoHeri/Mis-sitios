import reflex as rx
import datetime
from Mis_sitios.styles.styles import  Tamaño as Tamaño
from Mis_sitios.styles.styles import Tamaño as Tamaño
from Mis_sitios.styles.colores import colorTexto as colorTexto

def footer () -> rx.Component :
    return rx.vstack(
        rx.image(src="/favicon.ico"),
        rx.text(f"2022-{datetime.date.today().year} YAKODEV BY YAKO HERNANDEZ IRAGUEN", ),
        rx.text ("BUILDING SOFTWARE FROM ARGENTINA TO THE WORLD.",
                 margin_top = Tamaño.ZERO.value),
        margin_bottom = Tamaño.BIG.value,
        padding_bottom = Tamaño.BIG.value,
        font_size= Tamaño.MEDIUM.value,
        color = colorTexto.FOOTER.value

        )
