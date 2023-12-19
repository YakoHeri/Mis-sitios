import reflex as rx
from Mis_sitios.components.navbar import navBar
from Mis_sitios.components.footer import footer
from Mis_sitios.views.header.header import header
from Mis_sitios.views.links.links import Links
import Mis_sitios.styles.styles as styles
from Mis_sitios.styles.styles import  Tamaño as Tamaño

class State(rx.State):
    pass

def index () -> rx.Component:
    return rx.box(
        navBar(),
        rx.center(
            rx.vstack(
                header(),
                Links(),
                max_width = styles.MAX_WIDTH,
                width = "100%",
                margin_y = Tamaño.BIG.value
                
            )
        ),    
        footer()
    ) 

 

app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page (index)
app.compile()
