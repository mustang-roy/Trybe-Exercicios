#!/bin/bash

PATHF=$1

if [ -d $PATHF ]
then
  echo "Argumento eh um diretorio"
  FILES=`ls $PATHF | wc -l`

  echo "Esse diretorio possui $FILES arquivo(s)"
else
  echo "Argumento nao eh um diretorio"
fi