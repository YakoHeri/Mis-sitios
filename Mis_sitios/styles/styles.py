import reflex as rx
from enum import Enum
from .colores import colores as colores
from .colores import colorTexto as colorTexto
from .Fuentes import fuente as fuente

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
    VERYBIG = "8em"
    MEDIUM2 = "0.85em"

#Stilos
BASE_STYLE = {
    "background_color" : colores.FONDO.value,
    "font_family" : fuente.DEFAULT.value,
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
        "_hover" : {},
    },
    rx.Heading: {
        "size":"lg",
        "color": colorTexto.Header.value
    },
    rx.Span :{
        "font_family" : fuente.LOGO.value
    }

}  

estilo_titulo = dict (
    width = "100%",
    padding_top = Tamaño.DEFAULT.value,
)

estilo_titulo_boton = dict(
    font_size = Tamaño.DEFAULT.value,
    color =   colorTexto.Header.value,
    font_family = fuente.TITTEL.value
)

estilo_cuerpo_boton = dict(
    font_size = Tamaño.MEDIUM2.value,
    color = "#00000",
    font_family = fuente.DEFAULT.value
)

navbar_span_style = dict(
    font_family=fuente.LOGO.value,
    font_size = Tamaño.LARGE.value,
)   