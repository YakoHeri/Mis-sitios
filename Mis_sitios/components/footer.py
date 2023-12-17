import reflex as rx
import datetime


def footer () -> rx.Component :
    return rx.vstack(
        rx.image(src="/favicon.ico"),
        rx.text(f"2022-{datetime.date.today().year} YAKODEV BY YAKO HERNANDEZ IRAGUEN BUILDING SOFTWARE FROM ARGENTINA TO THE WORLD.")
        )
