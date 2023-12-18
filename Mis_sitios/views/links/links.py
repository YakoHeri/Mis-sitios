import reflex as rx
from Mis_sitios.components.LinkButton import Links_button
from Mis_sitios.components.title import title

def Links () -> rx.Component :
    return rx.vstack(
        title ("Comunidad"),
        Links_button("Linkedin",
                     "Te invito a ver mis estudios y certificados ", 
                    "https://www.linkedin.com/feed/"),
        Links_button("Github", 
                     "Podes revisar mis proyectos", 
                     "https://github.com/YakoHeri"),
        Links_button("Instagram", 
                     "Mis redes donde podes conocerme un poco mas", 
                     "https://www.instagram.com/"),
        Links_button("Whatsapp", 
                     "Enviame un mensaje ante cualquier consulta", 
                     "https://wa.me/2314615853" ),
        
        width = "100%"
    )
