# Lecturitas

Aplicación web en español para crear hojas de lectura de primaria: dos tiras verticales por hoja Carta, tres mini lecturas por tira, dibujos SVG en blanco y negro y preguntas de comprensión e inferencia.

## Ejecutar

Requiere Node.js 18 o posterior. No hay dependencias que instalar.

```sh
npm start
```

El servidor usa el puerto 3000, configurable con `PORT`. Para comprobar la sintaxis: `npm run check`.

## Uso

Selecciona un grado, un tema y un título. Genera una hoja y, si lo necesitas, edita sus lecturas y preguntas. El botón **Imprimir / PDF** abre el diálogo del navegador: selecciona tamaño Carta, escala 100 % y desactiva los encabezados y pies de página del navegador. Las preguntas se responden en el cuaderno.

La generación usa un banco local de 24 historias, no un servicio de IA. Las versiones para primer grado se acortan y las de cuarto a sexto añaden una frase de reflexión; se recomienda revisar la adecuación pedagógica para cada grupo. Los dibujos y el contenido funcionan sin servicios externos; las tipografías web son opcionales y tienen alternativas locales.

La edición permite personalizar cada historia. Las mayúsculas y los signos de puntuación se resaltan en rojo, también en las preguntas. Cada tira lleva el encabezado LEE · COPIA · PIENSA · RESPONDE · COLOREA, sin campo de nombre ni leyenda inferior.

El tamaño de letra se calcula automáticamente según el espacio disponible de cada lectura, tanto en pantalla como en impresión. Si un texto editado es demasiado largo incluso con el tamaño mínimo, la aplicación avisa para acortarlo antes de imprimir. Para conservar los resaltados, imprime en color. Los dibujos son ilustraciones vectoriales con contornos negros y espacios para colorear.
