import reflex as rx
from Mis_sitios.components.navbar import navBar
from Mis_sitios.components.footer import footer
from Mis_sitios.views.header.header import header
from Mis_sitios.views.links.links import Links
from Mis_sitios.views.gif.gifs import gif
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
                gif(),
                max_width = styles.MAX_WIDTH,
                width = "100%",
                margin_y = Tamaño.BIG.value,
                padding =Tamaño.BIG.value,
                
            )
        ),    
        footer()
    ) 

 

app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page (
    index,
    title="Yakodev   //  mi carta de presentacion",
    description= "Hola!! Mi nombre es Yako Hernandez Iraguen. Soy un apasionado desarrollador argentino de 23 años especializado en Full Stack Python y la librería Reflex.",
    image= "/avatar.png"
    )
app.compile()
