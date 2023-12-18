import reflex as rx
from enum import Enum

#constantes
MAX_WIDTH ="600px"

#tamaños

class Tamaño (Enum):
    SMALL = "0.5em",
    DEFAULT = "1em",
    MEDIUM = "0,8em",
    BIG = "2em",

#Stilos
BASE_STYLE = {
    rx.Button: {
        "width" : "100%",
        "height" : "100%",
        "display" : "block",
        "padding" : Tamaño.SMALL.value ,
        "border_radius" : Tamaño.BIG.value ,
        },
    rx.Link: {
        "text_decoration" : "none",
        "_hover" : {}
    }
}  

estilo_titulo = dict (
    width = "100%",
    padding_top = Tamaño.DEFAULT.value  
)

estilo_titulo_boton = dict(
    font_size = Tamaño.DEFAULT.value
)

estilo_cuerpo_boton = dict(
    font_size = Tamaño.MEDIUM.value
)

