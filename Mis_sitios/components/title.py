import reflex as rx
import Mis_sitios.styles.styles as styles

def title (text: str) -> rx.Component :
    return rx.heading (
        text,
        size= "md",
        style= styles.estilo_titulo,
    )