import reflex as rx
from Mis_sitios.components.LinkButton import Links_button
from Mis_sitios.components.title import title
from Mis_sitios.styles.styles import Tamaño

def Links () -> rx.Component :
    return rx.vstack(
        title ("Comunidad"),
        Links_button("Linkedin",
                     "Te invito a ver mis estudios y certificados ", 
                    "https://www.linkedin.com/feed/",
                    "/iconos/linkedin.svg"),
        Links_button("Github", 
                     "Podes revisar mis proyectos", 
                     "https://github.com/YakoHeri",
                     "/iconos/github.svg"),
        Links_button("Instagram", 
                     "Mis redes donde podes conocerme un poco mas", 
                     "https://www.instagram.com/",
                     "/iconos/instagram.svg"),
        Links_button("Twitter", 
                     "Revisa mis actualizaciones diarias", 
                     "https://twitter.com/IragYako" ,
                     "/iconos/twitter.svg"),
        
        title ("Contacto"),
        Links_button("Contacto",
                     "Establece contacto conmigo de manera rapida", 
                    "https://wa.me/2314615853",
                    "/iconos/llamar.svg"),
        Links_button("Email", 
                     "Enviame un correo", 
                     "yakoirag@gmail.com",
                     "/iconos/correo.svg"),
        Links_button("Whatsapp", 
                     "Enviame un mensaje ante cualquier consulta", 
                     "https://wa.me/2314615853" ,
                     "/iconos/whatsapp.svg"),
        
        
        width = "100%",
        spacing = "1em"

    )


