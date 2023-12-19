import reflex as rx
from enum import Enum
from .colores import colores as colores
from .colores import colorTexto as colorTexto

#constantes
MAX_WIDTH ="560px"

#tamaños

class Tamaño (Enum):
    ZERO = "0px !important",
    SMALL = "0.5em",
    DEFAULT = "1em",
    MEDIUM = "0.7em",
    LARGE = "1.3em",
    BIG = "2em",

#Stilos
BASE_STYLE = {
    "background_color" : colores.FONDO.value,
    rx.Button: {
        "width" : "100%",
        "height" : "100%",
        "display" : "block",
        "padding" : Tamaño.SMALL.value ,
        "border_radius" : Tamaño.BIG.value ,
         "background_color" : colores.CONTENIDO.value,
        "color" : colorTexto.BODY.value,
        "_hover" : {
            "background_color" : colores.SECUNDARIO.value,
        }

        },
    rx.Link: {
        "text_decoration" : "none",
        "_hover" : {}
    }

}  

estilo_titulo = dict (
    width = "100%",
    padding_top = Tamaño.DEFAULT.value,
    color =   colorTexto.Header.value,
)

estilo_titulo_boton = dict(
    font_size = Tamaño.DEFAULT.value,
    color =   colorTexto.Header.value,
)

estilo_cuerpo_boton = dict(
    font_size = Tamaño.MEDIUM.value,
    color = "#00000"
)

navbar_title_style = dict(
    font_family="Comfortaa-Medium",
    font_size = Tamaño.LARGE.value,
)   