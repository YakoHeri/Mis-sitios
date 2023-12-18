import reflex as rx
import Mis_sitios.styles.styles as styles

def title (text: str) -> rx.Component :
    return rx.heading (
        text,
        style= styles.estilo_titulo,
        size= "lg"
    )