#!/usr/bin/env python3
"""
Servidor Flask para el Simulador de Examen VTC
Ejecuta en http://192.168.8.101:5000
"""

from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
            template_folder=os.getcwd(),
            static_folder=os.getcwd(),
            static_url_path='')

@app.route('/')
def index():
    """Sirve la página principal"""
    return send_from_directory(os.getcwd(), 'index.html')

@app.route('/<path:filename>')
def serve_files(filename):
    """Sirve archivos estáticos (CSS, JS, JSON)"""
    return send_from_directory(os.getcwd(), filename)

if __name__ == '__main__':
    print("=" * 60)
    print("Simulador de Examen VTC")
    print("=" * 60)
    print("\n✓ Servidor iniciado")
    print("\n  Accede en: http://192.168.8.101:5000")
    print("  O en: http://localhost:5000")
    print("\n  Presiona Ctrl+C para detener el servidor")
    print("=" * 60 + "\n")

    app.run(host="127.0.0.1", port=5000, debug=True)