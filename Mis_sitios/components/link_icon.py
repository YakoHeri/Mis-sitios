import reflex as rx
import Mis_sitios.styles.styles as styles
from Mis_sitios.styles.styles import Tamaño as Tamaño


def link_icon (url: str, image:str, alt=str )-> rx.Component:
    return rx.link (
        rx.image (
            src=image,
            width = Tamaño.LARGE.value,
            alt = alt
        ),
        href=url,
        is_external= True,
        size = Tamaño.BIG.value
    )