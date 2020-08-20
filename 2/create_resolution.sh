#!/bin/bash

START=1;

echo 'diga o nome base do projeto';
read NOME;

echo 'diga quantos arquivos deseja criar';
read QUANTIDADE;

for ((c=$START; c<=$QUANTIDADE; c++));
do
  echo "#!/bin/bash" > $NOME"_"$c".sh";
done

for ((c=$START; c<=$QUANTIDADE; c++));
do
  chmod 755 $NOME"_"$c".sh";
done