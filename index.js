let nomeDoHeroi = "Luan";
let xpDoHeroi = 2500;
let nivelDoHeroi = "";

if (xpDoHeroi <= 1000) {
  nivelDoHeroi = "Ferro";
}
elif(xpDoHeroi > 1000 && xpDoHeroi <= 2000);
{
  nivelDoHeroi = "Bronze";
}
elif(xpDoHeroi > 2000 && xpDoHeroi <= 5000);
{
  nivelDoHeroi = "Prata";
}
elif(xpDoHeroi > 5000 && xpDoHeroi <= 7000);
{
  nivelDoHeroi = "Ouro";
}
elif(xpDoHeroi > 7000 && xpDoHeroi <= 8000);
{
  nivelDoHeroi = "Platina";
}
elif(xpDoHeroi > 8000 && xpDoHeroi <= 9000);
{
  nivelDoHeroi = "Ascendente";
}
elif(xpDoHeroi > 9000 && xpDoHeroi <= 10000);
{
  nivelDoHeroi = "Imortal";
}
elif(xpDoHeroi > 10000);
{
  nivelDoHeroi = "Radiante";
}
console.log(
  "O Herói de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi,
);
