import reflex as rx
import Mis_sitios.styles.styles as styles

def Links_button (titulo:str, cuerpo:str, url= str, image= str) -> rx.Component :
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src= image,
                    width = styles.Tamaño.BIG.value,
                    height = styles.Tamaño.BIG.value,
                    margin= styles.Tamaño.MEDIUM.value
                ),
                rx.vstack(
                 rx.text (titulo, style= styles.estilo_titulo_boton),
                 rx.text (cuerpo, style=styles.estilo_cuerpo_boton),
                 spacing= "0.5em",
                 align_items= "start",
                 margin= styles.Tamaño.ZERO.value
                ),
               
            )
        ),
        href= url,
        target="_blank",
        is_external= True,
        width = "100%"
        
    )


    
