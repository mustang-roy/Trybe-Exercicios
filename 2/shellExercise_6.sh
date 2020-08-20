#!/bin/bash

#!/bin/bash

PATHF=$1

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