import reflex as rx
from Mis_sitios.components.LinkButton import Links_button

def Links () -> rx.Component :
    return rx.vstack(
        Links_button("Linkedin", url= "https://www.linkedin.com/feed/"),
        Links_button("Github", url="https://github.com/YakoHeri"),
        Links_button("Instagram", url="https://www.instagram.com/"),
        Links_button("Whatsapp", url="https://wa.me/2314615853" ),
        
    )
