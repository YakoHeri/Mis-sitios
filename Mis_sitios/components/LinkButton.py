import reflex as rx


def Links_button (text:str, url= str) -> rx.Component :
    return rx.link (
        rx.button(text),
        href= url
    )
