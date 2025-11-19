#!/bin/bash

# Script pour lancer le serveur de développement avec la bonne version de Node

# Augmenter la limite de fichiers ouverts
ulimit -n 4096

# Utiliser Node 20 installé via asdf
export PATH="$HOME/.asdf/installs/nodejs/20.18.0/bin:$PATH"

# Lancer Vite
npx vite --open
