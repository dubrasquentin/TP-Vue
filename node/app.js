
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 
// Nous définissons ici les paramètres du serveur.

// Nous créons un objet de type Express. 
var app = express(); 

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router(); 

// Je vous rappelle notre route (/films).  
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
myRouter.route('/')
.get(function(req,res){ 
 res.json({
 message : "Liste des films avec paramètres :",
 methode : req.method });
 
})

//POST
.post(function(req,res){
      res.json({message : "Ajoute un nouveau film à la liste", methode : req.method});
})
//PUT
.put(function(req,res){ 
      res.json({message : "Mise à jour des informations d'un film dans la liste", methode : req.method});
})
//DELETE
.delete(function(req,res){ 
res.json({message : "Suppression d'un film dans la liste", methode : req.method});  
}); 

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);  

// Démarrer le serveur 
app.listen(8080, () => console.log('VueJs_Projet on port 8081!'));