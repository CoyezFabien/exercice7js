document.getElementById('minimum').onclick = 
// pour avoir un code plus propre on peut utiliser cette manière de relier directement le button de l'id qui est en bas formulaire en html avec le javascript en marquant document.getElementById('')on met document l'element parent le points. (associé) à getElementById ('')pour le relier à ID entre parenthe et  autour des cote simple. Onclick 
// onclik etait l'attribut (ici il devient l'attribut de getElementById qui dit on vet executer la fonction suivante lors de la detection du clique) on le met directement avec le reste associé avec le point tout cela on associ cette ID à une fonction
function age()
// on nomme la function par un nom quelconque ()
{
var age = document.getElementById('date').value;
// recupere la valeur de l'id et lui effecte à la variable age
if (age >= 18 && age < 150){
    alert('vous êtes majeur');
}
else if (age > 0 && age < 18) {
    alert('vous êtes mineur');
}
else if (age < 0 || age==0 || age >= 150)
{
    alert('vous êtes un mytho');
}
}
// Dans cette exercice on va utiliser des condition dans javasript avec if (si) et else (sinon) 
// on commence par récupere ID avec le get.Elem...('').onclick = function ....() et on lui donne une function avec un nom()
// on ouvre les acolades pour délimiter le bloc de la fonction 
// On commence par un If (SI) et on lui met une condition si notre var est >= 18 (si on marque juste le signe supérieur > les gens qui marqueront 18 seront dans la catégorie mineur hors la majorité c'est 18 d'ou le signe égal  = apres  le signe supérieur pour dire egal à 18 ou supérieur) et on utilise le symbole && pour dire et entre les 2 conditions ex si age est >=(sup ou egal) à 18 ET age est <(inf) 150 alors on aura l'alerte vous etes majeur le && est un opérateur logique, les opérateur logique sont typiquement utilisés avec des valeurs booléennes.
// Ensuite La structure conditionnelle if…else (« si… sinon » en français) va être plus complète que la condition if puisqu’elle va nous permettre d’exécuter un premier bloc de code et le else si on ne reponds pas au IF.
// même logique que If, dans la construction de else if ( age > (inférieur) 0 &&(ET) age < 18) (si l'age est en 0 et 18 on aura du coup l'alerte vous êtes mineur)
// la 3 conditions c'est encore plus détaille les condition et pour utiliser un autre signe opérateur logique le OU avec le symbole || (atlt gr + chiffre 6)
// else if (age < 0 || (ou) age ==0 (== strictement égal) || age >= 150 ) si ton age est en dessous de 0 OU egal à 0 OU age est supérieur à 150 on aura une alerte marqué vous êtes un mytho
// ({}) Une instruction de bloc est utilisée afin de grouper zéro ou plusieurs instructions. Le bloc est délimité par une paire d'accolades. 