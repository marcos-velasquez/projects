# TierMaker App 🎯

## Presentación General

**TierMaker** es una herramienta en línea diseñada para permitir a los usuarios crear sus propias plantillas de niveles, comúnmente conocidas como "tier lists". Estas plantillas son ideales para clasificar elementos en diferentes niveles según criterios específicos como calidad, preferencia personal, popularidad, entre otros. 🏆

---

## Partes de un tier maker

- **Título**: El título de la plantilla de niveles.
- **Niveles**: Las filas horizontales que representan los diferentes niveles de clasificación.
- **Elementos**: Las imágenes que se arrastran y colocan en los diferentes niveles.

## Funciones del Sistema

- **Cambiar Título** 📝: Los usuarios pueden cambiar el nombre de su TierList para reflejar el tema o propósito específico de su clasificación.
- **Agregar Elementos** 📂: Los usuarios pueden agregar elementos a la TierList para clasificarlos en los diferentes niveles.
- **Arrastrar y Colocar Elementos** 🖱️: Nuestra interfaz intuitiva permite a los usuarios arrastrar y soltar elementos en los diferentes niveles según sus preferencias o criterios de clasificación (S,A,B,C,D,E,F).
- **Resetear Niveles** 🔄: Opción de reiniciar toda la información de la lista, permitiendo a los usuarios comenzar de nuevo.
- **Descargar en Formato PNG** 💾: Los usuarios tienen la posibilidad de descargar sus tier lists en formato PNG.

---

## Modelo del Dominio

![DomainModel](./out/docs/DomainModel/index/DomainModel.png 'DomainModel')

## Casos de Uso

![UseCases](./out/docs/UseCases/index/UseCases.png 'UseCases')

### Cambiar Título

![ChangeTitleUseCase](./out/docs/UseCases/specifications/ChangeTitle/index/ChangeTitleUseCase.png 'ChangeTitleUseCase')

### InsertElement

![InsertElementUseCase](./out/docs/UseCases/specifications/InsertElement/index/InsertElementUseCase.png 'InsertElementUseCase')

### Reset

![ResetUseCase](./out/docs/UseCases/specifications/Reset/index/ResetUseCase.png 'ResetUseCase')

### Download

![DownloadUseCase](./out/docs/UseCases/specifications/Download/index/DownloadUseCase.png 'DownloadUseCase')

### MoveElement

![MoveElementUseCase](./out/docs/UseCases/specifications/MoveElement/index/MoveElementUseCase.png 'MoveElementUseCase')
