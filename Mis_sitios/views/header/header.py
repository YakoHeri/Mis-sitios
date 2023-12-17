import reflex as rx

def header () -> rx.Component :
    return rx.vstack(
         rx.avatar(name="Yako Hernandez iraguen", size="md"),
         rx.text ("@yakoDev"),
         rx.text ("HOLA!! MI NOMBRE ES YAKO HERNANDEZ IRAGUEN"),
          rx.text ("texto descriptivo")
    )