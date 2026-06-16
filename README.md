# Fusiona Elements

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![HTML5](https://img.shields.io/badge/HTML5_Drag_%26_Drop-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)

---

## 👋 Para recruiters

Juego de tablero tipo *Merge Puzzle* desarrollado con **React + TypeScript**, sin ninguna libreria externa de interaccion. Toda la logica de arrastre esta construida sobre la **API nativa HTML5 Drag & Drop**, integrada de forma reactiva con los hooks de React.

**Stack:** React 19 · TypeScript · Vite · HTML5 Drag & Drop API · CSS

**Destacado:**
- 🌐 **Desplegado en produccion:** [fusiona-elements.netlify.app](https://fusiona-elements.netlify.app/)
- Drag & Drop implementado desde cero con eventos nativos del navegador, sin librerias de terceros
- Gestion de estado bidimensional (matriz 6x6) con actualizaciones inmutables en React
- Logica de fusion y evolucion encapsulada con tipado estricto en TypeScript
- Componentes modulares y reutilizables con estilos encapsulados por componente

---

## 🛠️ Stack tecnologico

**Frontend** React 19 · TypeScript · Vite · CSS

---

## 🎮 Mecanica del juego

El juego transcurre en una cuadricula de **6x6**:

1. **Generadores permanentes** en las esquinas del tablero. Al hacer clic generan un elemento de nivel 1 en una celda vacia aleatoria.
2. **Sistema de fusion** por arrastre: dos elementos del mismo tipo y nivel se fusionan al soltarlos uno sobre el otro, subiendo al nivel siguiente.
3. **Jerarquia de evolucion** de cuatro niveles por elemento.

| Nivel | Elemento Agua | Elemento Fuego |
|:---:|:---|:---|
| **1** | 💧 Gota de Agua | 🔥 Llama de Fuego |
| **2** | 🥤 Vaso de Agua | 🍳 Huevo Frito |
| **3** | 🚰 Grifo de Agua | 🥓 Tira de Bacon |
| **4** | 🚚 Camion Cisterna | 🍔 Hamburguesa Completa |

---

## ✨ Aspectos tecnicos destacados

| Tecnica | Detalle |
|---|---|
| **HTML5 Drag & Drop nativo** | Implementacion con `onDragStart`, `onDragOver` y `onDrop` sin librerias externas, coordinando estado entre celda origen y celda destino |
| **Estado matricial inmutable** | La cuadricula 6x6 se gestiona como un array bidimensional en `useState`; cada actualizacion clona la estructura para garantizar renderizados correctos |
| **Tipado estricto** | Tipo `Elemento` con `emoji`, `tipo` y `nivel` aplicado en toda la logica de fusion y generacion |
| **Componentes desacoplados** | `<Tablero />` centraliza el estado y la logica; `<Casilla />` es un componente de presentacion puro que recibe handlers como props |

---

## 📂 Estructura del proyecto

```
src/
├── components/
│   ├── Casilla.tsx   # Celda individual del tablero (presentacion pura)
│   ├── Tablero.tsx   # Matriz 6x6, logica de fusion y eventos drag & drop
│   └── Tablero.css   # Estilos de la cuadricula
├── App.tsx           # Componente raiz
├── index.css         # Estilos globales
└── main.tsx          # Punto de entrada Vite
```

---

## 🚀 Instalacion y puesta en marcha

### Prerrequisitos

- Node.js v18+
- npm

### Pasos

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Fernandodg97/fusiona-elements.git
   cd fusiona-elements
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicacion estara disponible en `http://localhost:5173`

---

## 👨‍💻 Autor

| | |
|---|---|
| **Fernando Diaz** | [github.com/Fernandodg97](https://github.com/Fernandodg97) |

---

## 📄 Licencia

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es)
