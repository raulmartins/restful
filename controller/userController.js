var db = require('../db_config.js');


exports.list = function(callback){
 db.User.find({}, function(error, users){

                if(error)
                        callback({error: 'Nao foi possivel retornar os usuarios'});
                else
                        callback(users)


        });
};

exports.user = function(id, callback){
	    
         db.User.findById(id, function	(error, user){

                if(error)
                        callback({error: 'Nao foi possivel encontrar'});
                else
                        callback(user)

        });


};

exports.save = function(name, email, password, callback){

	new db.User({

              name: name,
              email: email,
              password: password,
              created_at: new Date() 

        }).save(function(error, user){
                if(error)
                        callback({error: 'Nao foi possivel salvar o usuario'});
                else
                        callback(user);


        });
};

exports.update = function(id, name, email, password, callback){	

  	db.User.findById(id, function(error, user){



      if (name) {
         user.name = name;

      }

       if (email) {
         user.email = email;

      }

       if (password) {
         user.password = password;

      }
      user.save(function(error, user){

      if(error){
         callback({error: 'Nao foi possivel alterar o usuário'});
      }else{
         callback(user);
      }

      });


   });
   };



exports.delete = function(id, callback){
	db.User.findById(id, function(error, user){

    	if(error)
        	callback	({error: 'Nao foi possivel encontrar'});
        else
            user.remove(function(error){

      	if (!error) {
      		callback({response: 'usuário excluido com sucesso.'});
    		}
		});

 	});
};

