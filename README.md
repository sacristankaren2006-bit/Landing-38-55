# Landing OvaBloom para Shopify

La landing de OvaBloom, lista para instalar en un tema de Shopify (Online Store 2.0, por ejemplo Dawn).

## Qué hay en este repositorio

| Carpeta / archivo | Qué es |
|---|---|
| `sections/ovabloom-landing.liquid` | La landing completa, como una sola sección de Shopify |
| `assets/ovabloom-landing.js` | El código que hace funcionar la galería, los planes, la suscripción, las preguntas frecuentes y la línea de tiempo |
| `assets/ovb-*.jpg / .png / .svg` | Todas las imágenes (26) |
| `templates/product.ovabloom.json` | Plantilla de producto que usa la sección |
| `preview/index.html` | Vista previa local: ábrela en el navegador para ver cómo debe quedar |

## Instalación (unos 10 minutos)

1. **Duplica el tema** en Shopify (Tienda online → Temas → ··· → Duplicar) y trabaja sobre la copia, no sobre el tema publicado.
2. En la copia: **··· → Editar código**.
3. **Sections → Agregar una nueva sección** → nómbrala `ovabloom-landing` → pega el contenido de `sections/ovabloom-landing.liquid`.
4. **Assets → Cargar un activo** → sube `ovabloom-landing.js` y todas las imágenes `ovb-*` de la carpeta `assets/`. Los nombres deben quedar exactamente iguales.
5. **Templates → Agregar una nueva plantilla** → tipo `product`, formato JSON, nombre `ovabloom` → pega el contenido de `templates/product.ovabloom.json`.
6. En **Productos → OvaBloom → Plantilla del tema**, elige `product.ovabloom`.
7. Abre el **editor del tema** sobre ese producto y, en la sección *OvaBloom Landing*, completa la configuración (abajo).
8. Revisa la vista previa (celular y escritorio) y comparte el link de vista previa antes de publicar.

> Si el tema está conectado a GitHub, también se pueden copiar las carpetas `sections/`, `assets/` y `templates/` a la raíz del tema.

## Configuración de la sección

- **Variante: 1, 2 y 3 frascos.** Pega el ID numérico de cada variante. Está en Productos → OvaBloom → abre la variante → la URL termina en `/variants/123456789`. Sin esto, el botón de compra no puede agregar el producto.
- **Selling plan (opcional).** Solo si usan una app de suscripciones (Shopify Subscriptions, Recharge, etc.). Si lo dejas vacío y la clienta marca "Suscríbete", se compra como compra única.
- **Mostrar barra de ofertas.** Encendida por defecto.
- **Mostrar header / footer propio.** Apagados por defecto, porque el tema ya trae los suyos. Enciéndelos solo si la página va sin el header y el footer del tema.

## Cómo funciona la compra

El botón **COMPRAR AHORA** agrega al carrito la variante del plan elegido (y el selling plan si la suscripción está marcada) y lleva directo al **checkout**. Si algo falla, lleva al carrito.

## Puntos a revisar

- **Precios.** Los precios que se muestran en la landing están escritos en el código (`$115.000`, `$198.000`, `$267.000` y los de suscripción). El cobro real lo hace Shopify con el precio de cada variante, así que **los precios de las variantes en Shopify deben coincidir** con los de la landing.
- **Reseñas.** Son texto fijo. Las fotos marcadas "MUESTRA" hay que reemplazarlas por fotos reales de clientas.
- **Leyenda legal.** Confirmar con regulatorio si se debe agregar la leyenda INVIMA exigida para suplementos.
- **Tipografías.** Outfit y DM Sans se cargan desde Google Fonts dentro de la sección.

## Cambios al diseño

Cualquier cambio de diseño o de texto se hace primero en la landing original y luego se actualiza este repositorio. Así el diseño aprobado y Shopify no se separan.
