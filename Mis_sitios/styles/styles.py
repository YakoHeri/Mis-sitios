import reflex as rx
from enum import Enum
from .colores import colores as colores
from .colores import colorTexto as colorTexto
from .Fuentes import fuente as fuente
from Mis_sitios.styles.Fuentes import pesoFuente

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
    "font_weight" : pesoFuente.LIGHT.value,
    rx.Button: {
        "width" : "100%",
        "height" : "100%",
        "padding" : Tamaño.SMALL.value ,
        "border_radius" : Tamaño.BIG.value ,
        "background_color" : colores.CONTENIDO.value,
        "color" : colorTexto.BODY.value,
        "white_space" : "normal",
        "text_align" : "start", 
        "align_items" : "start",
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
    rx.Box :{
        "font_family" : fuente.LOGO.value,
        "font_weight" : pesoFuente.LIGHT.value,
        
    }

}  

STYLESHEET = [
    "https://fonts.googleapis.com/css?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css?family=Comfortaa:wght@500&display=swap"
]

estilo_titulo = dict (
    width = "100%",
    padding_top = Tamaño.DEFAULT.value,
)

estilo_titulo_boton = dict(
    font_size = Tamaño.DEFAULT.value,
    color =   colorTexto.Header.value,
    font_family = fuente.TITTEL.value,
    font_weight = pesoFuente.MEDIUM.value,
)

estilo_cuerpo_boton = dict(
    font_size = Tamaño.MEDIUM2.value,
    color = "#00000",
    font_family = fuente.DEFAULT.value,
    font_weight = pesoFuente.LIGHT.value,
)

navbar_span_style = dict(
    font_family=fuente.LOGO.value,
    font_weight = pesoFuente.MEDIUM.value,
    font_size = Tamaño.LARGE.value,
)   