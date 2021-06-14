# Test-Technique
 
Créer un projet NodeJS
Tout d'abord, vous avez besoin de créer un dossier nommé "Test Technique" 

Ouvrez des fenêtres CMD et CD et allez vers le dossier Test technique. Puis exécutez la commande ***npm init*** 


Express.js  est un Web Application Framework de NodeJS. Il fournit un ensemble de fonctionnalités puissantes aux applications web et mobiles.
pour install exécuter la commande ***npm install express***


Notre serveur de donnée est MongoDB. pour installer l'ORM mongoose exécutez la commande ***npm install mongoose***

Installer GraphQL exécutez la commande ***npm install --save graphql, express-graphql***

crée un ficher ***server.js***


## Créer la structure du projet

créer dossier "Middlewares" où nous avons crée le ficher "isAuth.js" où nous avons implementer la fonction de vérification de l'authotification 
créer dossier "graphql" qui contient deux dossiers "Schema" et "resolvers"  
"Schema" où nous avons déclaré notre schemas
"resolvers" où nous avon déclaré notre resolvers
créer dossier "models" qui contient nos models


 
* graphql
 * schema
     * index.js
    
     
  * resolvers
     * auth.js
     * commentaire.js
     * index.js
     * merge.js
     * partage.js
     * tache.js


* models
	* commentaires.js
	* tache.js
	* user.js
 * partage.js
 


* Middlewares
	* isAuth.js


# Fonctionnalités

### Authentification

JSON Web Token (JWT) l permet l'échange sécurisé de jetons (tokens) entre plusieurs parties. Cette sécurité de l’échange se traduit par la vérification de l’intégrité des données à l’aide d’une signature numérique. Elle s’effectue par l'algorithme HMAC ou RSA.


Pour installer JWT  exécutez la commande ***npm install jsonwebtoken***

Créer un dossier "cors" qui contient un fichier "jwt" où on a implémenter la fonction ***authenticateToken()*** 


### Gestion utilisateurs

L'utilisateur peut créer un compte et S'identifier

Dans le fichier "graphql/resolver/auth.js" on implémenter les fonctions *

**AddUser()***  


* mutation { addUser } ajouter un utilisateur 
	* Paraméters
		* no parameters
	* requiset body : mutation{
	  addUser(userInput:{email:"",password: ""}){
    
  }
}



***login()*** 
* query { Login } 
	* Paraméters
		* no parameters
	** requiset body : query{
  login(email: "",password : ""){
    token
  }
} 



### Gestion des tâches

Dans le fichier "graphql/resolver/tache.js" on implémenter les fonctions :

***taches()***

* qurey { taches } tous des taches
	* Paraméters
		* no parameters



***Add_Tache()***

* mutation { addTache } ajouter une tache 
	* Paraméters
		* no parameters
	* requiset body : mutation{
  addTache(tacheInput : {name: "", description: ""}){
    
  }
} 

		


**comments()***


* query { comments } tous les commentaires 
	* Paraméters
		* no parameters



***commenter()***

*  ajouter un commentaire
	* Paraméters
		* no parameters
	* requiset body : {mutation{
commenter(tacheid: ""){
  
}  
}
		

***partager()***

*  ajouter un partage
	* Paraméters
		* no parameters
	* requiset body : {mutation{
partager(tacheid: ""){
  
}  
}
