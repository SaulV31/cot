# Cotizador web por horas + porcentajes

Aplicación estática para estimar presupuestos de desarrollo web considerando:

- Tipo de proyecto (institucional, e-commerce, landing, cursos, SaaS, etc.).
- Estructura del proyecto (sitio multipágina o landing por secciones).
- Tarifa por hora en rangos de `$10` a `$50` en saltos de `5`.
- Funcionalidades adicionales (cada una incrementa un porcentaje).
- Complejidad adicional manual y escala por volumen.

## Cómo abrirlo (rápido)

### Opción 1: abrir archivo directamente
1. Entra a la carpeta del proyecto.
2. Haz doble clic en `index.html`.

### Opción 2 (recomendada): servidor local
Desde terminal, en la carpeta del proyecto:

```bash
./start.sh
```

Luego abre en el navegador:

- `http://localhost:4173` (uso local)
- `http://127.0.0.1:4173` (alternativa)

También puedes elegir otro puerto:

```bash
./start.sh 8080
```

## Solución de problemas: "no puedo abrirlo"

Si no abre, revisa esto:

1. **Estás en la carpeta correcta**
   ```bash
   pwd
   ls
   ```
   Debes ver `index.html`.

2. **Python disponible**
   ```bash
   python3 --version
   ```

3. **Puerto ocupado**
   Si `4173` está ocupado, usa otro:
   ```bash
   ./start.sh 8080
   ```

4. **Abrir la URL correcta**
   Si ejecutaste en `8080`, abre `http://localhost:8080`.

5. **Si usas entorno remoto o contenedor**
   Asegúrate de exponer/reenviar el puerto que uses (4173 u 8080).
