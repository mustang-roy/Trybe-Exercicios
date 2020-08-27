#!/bin/bash

read -p "Qual o caminho para verificação " PATHF

if [ -f $PATHF ]
then
  echo "Arquivo aqui"
else
  if [ -d $PATHF ]
  then
    echo "Diretório aqui"
  else
    echo "outracoisa"
  fi
fi

