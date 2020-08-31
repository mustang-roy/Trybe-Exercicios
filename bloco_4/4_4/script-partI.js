let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function mensagemBoasVindas(information) {
  console.log(`Boas Vinda, ${information.personagem}`)
}

function insertChave(information){
  information.recorrente = "Sim";
}

function showKeys(information) {
  for (const item in information) {
      console.log(item)
  }
}

function showContent(information) {
  for (const item in information) {
      console.log(information[item])
  }
}

function newObject(information2) {
  information2.personagem = "Tio Patinhas",
  information2.origem =  "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  information2.nota =  "O último MacPatinhas",
  information2.recorrente = "Sim"
}

function print2Infos(information, information2) {
  console.log(information.personagem + " e " +information2.personagem);
  console.log(information.origem + " e " + information2.origem);
  console.log(information.nota + " e " + information2.nota);
  if (information.recorrente === "Sim" && information2.recorrente === "Sim") {
    console.log("Ambos Recorrentes")
  }
}

let info2 = Object.create(info);

insertChave(info);
newObject(info2);
print2Infos(info, info2)

