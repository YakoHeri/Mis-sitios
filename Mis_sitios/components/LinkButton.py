import reflex as rx
import Mis_sitios.styles.styles as styles

def Links_button (titulo:str, cuerpo:str, url= str) -> rx.Component :
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(
                    tag = "arrow_forward",
                    width = styles.Tamaño.BIG.value,
                    height = styles.Tamaño.BIG.value
                ),
                rx.vstack(
                 rx.text (titulo, style= styles.estilo_titulo_boton),
                 rx.text (cuerpo, style=styles.estilo_cuerpo_boton),
                 align_items= "start"
                ),
               
            )
        ),
        href= url,
        target="_blank",
        is_external= True,
        width = "100%"
        
    )


    
