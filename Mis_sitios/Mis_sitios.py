import reflex as rx
from Mis_sitios.components.navbar import navBar
from Mis_sitios.components.footer import footer
from Mis_sitios.views.header.header import header
from Mis_sitios.views.links.links import Links

class State(rx.State):
    pass

def index () -> rx.Component:
    return rx.vstack(
        navBar(),
        header(),
        Links(),
        footer(),
    )
    

app = rx.App()

app.add_page (index)
app.compile()
