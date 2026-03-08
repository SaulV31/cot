#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"

echo "Iniciando cotizador en http://0.0.0.0:${PORT}"
echo "Si estás en tu PC: abre http://localhost:${PORT}"
python3 -m http.server "${PORT}" --bind 0.0.0.0
