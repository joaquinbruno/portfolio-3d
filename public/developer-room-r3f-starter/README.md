# Developer Room Prototype

Modelo low-poly/isométrico generado a partir de la imagen de referencia.

## Cómo usar

1. Copiá `public/models/developer-room-prototype.glb` a tu proyecto Next.js.
2. Copiá los archivos de `src/components/scene` y `src/data`.
3. Instalá dependencias:

```bash
npm install three @react-three/fiber @react-three/drei zustand
```

4. Usá `<DeveloperRoomModel />` dentro de tu `<Canvas>`.

> Nota: este GLB es un prototipo visual liviano. La interacción fina conviene resolverla con hotspots HTML/React Three Fiber encima del modelo.
