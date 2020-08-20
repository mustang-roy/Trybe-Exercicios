#!/bin/bash

FILE="/home/roymustang/Development/shell_script/shellExercise_2.sh"

if [ -f "$FILE" ] 
then
  echo "O caminho: $FILE está habilitado!"
  if [ -w "$FILE" ] 
  then
    echo "Você tem permissão para editar $FILE"
  else
    echo "Você não foi autorizado a editar"
  fi
else
  echo "O caminho não existe"
fi

