import reflex as rx
from Mis_sitios.styles.styles import Tamaño as Tamaño

def navBar () -> rx.Component: 
    return rx.hstack(
        rx.text("YakoDev", 
                

        ),
        position= "sticky",
        bg = "lightgrey",
        padding_x= Tamaño.DEFAULT.value,
        padding_y= Tamaño.SMALL.value,
        z_index="999",
        top = "0"
    )
    