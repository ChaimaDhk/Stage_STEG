const Journaliste = require('./Models/Journaliste');
const Retombe = require('./Models/Retombe');
const Media = require('./Models/Media');
const User = require('./Models/Users');
const mongoose = require('mongoose');
const https = require('https')
const http = require('http')
const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();
//utilisation du body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// access to folder images
app.use('/images', express.static(path.join('Backend/images')));

//Connexion BD
mongoose.connect('mongodb://localhost:27017/STEG', { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});;
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

///********************** */ Config Multer ****************************
// Définition des extensions selon le type de media  
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        //Affecter  la destination
        cb(null, 'backend/images')
    },
    //file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '.' + extension;
        //Affecter file name
        cb(null, imgName);
    }
});





// Traitement de add journaliste 
app.post('/api/addJournaliste', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in add journaliste');
    let journaliste = {};
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
     console.log( req.body);
    journaliste = new Journaliste({
        Situation: req.body.Situation,
        NomPrenom: req.body.NomPrenom,
        Anniversaire: req.body.Anniversaire,
        Medias: req.body.Medias,
        Support: req.body.Support,
        Service: req.body.Service,
        Qualification: req.body.Qualification,
        Specialite: req.body.Specialite,
        Rubrique: req.body.Rubrique,
        img:url+'/images/' + req.file.filename,
        Formation: req.body.Formation,
        Adresse: req.body.Adresse,
      
        Direct: req.body.Direct,
        Standard: req.body.Standard,
        Fax: req.body.Fax,
        Portable: req.body.Portable,  
        Presence: req.body.Presence,
        Domicile: req.body.Domicile,
        Mail: req.body.Mail,
        Reseaux: req.body.Reseaux,  
        SkypeViber: req.body.SkypeViber,
        Site: req.body.Site,
        Appreciation: req.body.Appreciation, 
        Couvertures: req.body.Couvertures,
        cadeaux: req.body.cadeaux,
        Types: req.body.Types,
        Occasion: req.body.Occasion,
        InfoDrives: req.body.InfoDrives
    });
    console.log('addded journaliste', journaliste);

    journaliste.save();

    res.status(200).json({
        message: "added journaliste"

    });

});


// Traitement de get All journalistes 
app.get('/api/allJournalistes', (req, res) => {
    console.log('Hello in BE to get all journalistes');

    Journaliste.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                journalistes: docs
            });
        }
    });



});


// traitement delete jounaliste
app.delete('/api/deleteJournaliste/:id', (req, res) => {
    console.log('here in delete journaliste');
    const id = req.params.id;
    console.log('id', id);
    Journaliste.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});
// Traitement de get journaliste by id
app.get('/api/allJournalistes/:id', (req, res) => {
    console.log('Hello in BE to get event by id');
    let id;
    let journaliste = {};
   
    id = req.params.id;
    console.log('id', id);

    Journaliste.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded journaliste', doc);
            res.status(200).json({
                journaliste: doc

            });

        }
    )

});
// traitement edit Journaliste
app.put('/api/editJournaliste/:id', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in edit Journaliste',  req.body._id);
    console.log(req.body._id);
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    let journaliste = {
        _id: req.body._id,
        Situation: req.body.Situation,
        NomPrenom: req.body.NomPrenom,
        Anniversaire: req.body.Anniversaire,
        Medias: req.body.Medias,
        Support: req.body.Support,
        Service: req.body.Service,
        Qualification: req.body.Qualification,
        Specialite: req.body.Specialite,
        Rubrique: req.body.Rubrique,
        img:url+'/images/' + req.file.filename,
        Formation: req.body.Formation,
        Adresse: req.body.Adresse,
        Direct: req.body.Direct,
        Standard: req.body.Standard,
        Fax: req.body.Fax,
        Portable: req.body.Portable,  
        Presence: req.body.Presence,
        Domicile: req.body.Domicile,
        Mail: req.body.Mail,
        Reseaux: req.body.Reseaux,  
        SkypeViber: req.body.SkypeViber,
        Site: req.body.Site,
        Appreciation: req.body.Appreciation, 
        Couvertures: req.body.Couvertures,
        cadeaux: req.body.cadeaux,
        Types: req.body.Types,
        Occasion: req.body.Occasion,
        InfoDrives: req.body.InfoDrives
   

    };

    Journaliste.updateOne({ _id: req.body._id }, journaliste).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});
 // Traitement de Get Journalistes By Name
 app.post('/api/getJournalisteByName', (req, res) => {
    console.log('Hello in BE to get journalistes by');
    console.log('here search value', req.body.search);
    Journaliste.find({
      
        $or: [
            { NomPrenom: { $regex: `.*${req.body.search}` } }]
        
     } ).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    journalistes: docs
                 
                });
                console.log(docs)
            }
        });
});
 // Traitement de Get Journalistes By Adresse
 app.post('/api/getJournalisteByAdresse', (req, res) => {
    console.log('Hello in BE to get journalistes by');
    console.log('here search value', req.body.search);
    Journaliste.find({
        $or: [
      { Adresse:{ $regex: `.*${req.body.search}`}}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    journalistes: docs
                 
                });
                console.log(docs)
            }
        });
});
 // Traitement de Get Journalistes By Anniversaire
 app.post('/api/getJournalisteByAnniversaire', (req, res) => {
    console.log('Hello in BE to get journalistes by');
    console.log('here search value', req.body.search);
    Journaliste.find({
        $or: [
      { Anniversaire:{ $regex: `.*${req.body.search}`}}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    journalistes: docs
                 
                });
                console.log(docs)
            }
        });
});
 // Traitement de Get Journalistes By Portable 
 app.post('/api/getJournalisteByPortable', (req, res) => {
    console.log('Hello in BE to get journalistes by');
    console.log('here search value', req.body.search);
    let searchedVal = parseInt(req.body.search);

    Journaliste.find({
        $or: [
      { Portable:{ $regex: `${req.body.search}`}}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    journalistes: docs
                 
                });
                console.log(docs)
            }
        });
});
 // Traitement de Get Journalistes By Mail
 app.post('/api/getJournalisteByMail', (req, res) => {
    console.log('Hello in BE to get journalistes by');
    console.log('here search value', req.body.search);
    Journaliste.find({
        $or: [
      { Mail:{ $regex: `.*${req.body.search}`}}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    journalistes: docs
                 
                });
                console.log(docs)
            }
        });
});
 // Traitement de Get Journalistes By Medias
 app.post('/api/getJournalisteByMedia', (req, res) => {
    console.log('Hello in BE to get journalistes by');
    console.log('here search value', req.body.search);
    Journaliste.find({
        $or: [
      { Medias :{ $regex: `.*${req.body.search}`}}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    journalistes: docs
                 
                });
                console.log(docs)
            }
        });
});
 
// Traitement de add user 
app.post('/api/addUser', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in add user');
    let user = {};
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    bcrypt.hash(req.body.password,10).then(cryptedPwd =>{
    user = new User({
        Nom: req.body.Nom,
       Prenom: req.body.Prenom,
        email: req.body.email,
        password: cryptedPwd,
        confirm: req.body.confirm,
        role:"invalideUser",
        img:url+'/images/' + req.file.filename
    });
    console.log('addded user', user);

    user.save();

    res.status(200).json({
        message: "added user"

    });
})
});
// Traitement de add Admin 
app.post('/api/addAdmin', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in add admin');
    let user = {};
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    bcrypt.hash(req.body.password,10).then(cryptedPwd =>{
    user = new User({
        Nom: req.body.Nom,
       Prenom: req.body.Prenom,
        email: req.body.email,
        password: cryptedPwd,
        confirm: req.body.confirm,
        role:"Admin",
        img:url+'/images/' + req.file.filename
    });
    console.log('addded admin', user);

    user.save();

    res.status(200).json({
        message: "added admin"

    });
})
});
// Traitement de get All users 
app.get('/api/allUsers', (req, res) => {
    console.log('Hello in BE to get all Users');

    User.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                users: docs
            });
        }
    });



});

// traitement delete user
app.delete('/api/deleteUser/:id', (req, res) => {
    console.log('here in delete user');
    const id = req.params.id;
    console.log('id', id);
    User.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});

//login 
app.post('/api/login', (req, res) => {
    console.log('here in login', req.body);
    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log('resultEmail', resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "Check you email"
                });
            }

            return bcrypt.compare(req.body.password, resultEmail.password);
        })
        .then((resultPwd) => {
            console.log('resultPwd', resultPwd);
            if (!resultPwd) {
                res.status(200).json({
                    findedUser: "check your password"
                });
            } else {

                User.findOne({email: req.body.email}).then(
                            (result)=>{
                             
                                    console.log('result',result);
                                    res.status(200).json({
                                        findedUser:result
                                    })
                                
                            }
                        )


            }
        });

});

// traitement edit Journaliste
app.put('/api/editUser/:id',(req, res) => {
    console.log('here in edit user', req.body._id);
    console.log(req.body._id);
    let url = req.protocol + '://' + req.get('host');
    console.log('edit succefully');
    let user = {
        role: "valider"
    };

    User.updateOne({ _id: req.body._id }, user).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});



 // Traitement de Getuser invalide
 app.post('/api/getUserInvalide', (req, res) => {
    console.log('Hello in BE to get user invalide');
    User.find({
        $or: [
      { role :"invalideUser"}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    users: docs
                 
                });
                console.log(docs)
            }
        });
});
 // Traitement de Get user valide
 app.post('/api/getUserValider', (req, res) => {
    console.log('Hello in BE to get user invalide');
    User.find({
        $or: [
      { role :"valider"}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    users: docs
                 
                });
                console.log(docs)
            }
        });
});
 // Traitement de Get Admins
 app.post('/api/getAdmins', (req, res) => {
    console.log('Hello in BE to get admin');
    User.find({
        $or: [
      { role :"Admin"}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    users: docs
                 
                });
                console.log(docs)
            }
        });
});

// Traitement de get user by id
app.get('/api/allusers/:id', (req, res) => {
    console.log('Hello in BE to get user by id');
    let id;
    let user = {};
   
    id = req.params.id;
    console.log('id', id);

    User.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded user', doc);
            res.status(200).json({
                user: doc

            });

        }
    )

});


// traitement edit user
app.put('/api/updateProfile/:id', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in edit user', req.body._id);
    console.log(req.body._id);
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
   
    let user = {
        _id: req.body._id,
     
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        email: req.body.email,
        img:url+'/images/' + req.file.filename,
    };

    User.updateOne({ _id: req.body._id }, user).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});

//changerPassword
app.post('/api/updatePwd',(req, res) => {
    console.log('here in edit password', req.body);
    bcrypt.hash(req.body.password.newPwd, 10).then(cryptedPwd => {
    let user = {
        _id: req.body.user._id,
  
        password: cryptedPwd,
       }
    User.findOne({ email: req.body.user.email }).then(
        (resultEmail) => {
            console.log('resultEmail', resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "0"
                });
            }

            return bcrypt.compare(req.body.password.oldPwd, resultEmail.password);
        })
        .then((resultPwd) => {
            console.log('resultPwd', resultPwd);
            if (!resultPwd) {
              return  res.status(200).json({
                    findedUser: "1"
                });
            } else {

                User.findOne({email: req.body.user.email})


            }
           User.updateOne({ _id: req.body.user._id }, user).then(
            (result) => {
                if (result) {
                   return res.status(200).json({
                        message: "edited successfuly"
                    });
                }
    
            }
        )  })
    });
});


// Traitement de add retombe 
app.post('/api/addRetombe',(req, res) => {
    console.log('here in add retombee');
    let retombe = {};
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
     console.log( req.body);
    retombe = new Retombe({
        Periode: req.body.Periode,
        Date: req.body.Date,
        TypeMedia: req.body.TypeMedia,
        Media: req.body.Media,
        Langue: req.body.Langue,
        Titre: req.body.Titre,
        Signature: req.body.Signature,
        RedacteurAnimateur: req.body.RedacteurAnimateur,
        Themes: req.body.Themes,
        Unit: req.body.Unit,
        Tendance: req.body.Tendance,
        Lien: req.body.Lien,
        donnerAnnotations: req.body.donnerAnnotations,
        Travail: req.body.Travail,
        LienOutput: req.body.LienOutput,
       
       
    });
    console.log('addded retombe', retombe);

    retombe.save();

    res.status(200).json({
        message: "added retombe"

    });

});



// traitement edit Journaliste
app.put('/api/editRetombe/:id',(req, res) => {
    console.log('here in edit retombe',  req.body._id);
    console.log(req.body._id);
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    let retombe = {
        _id: req.body._id,
        Periode: req.body.Periode,
        Date: req.body.Date,
        TypeMedia: req.body.TypeMedia,
        Media: req.body.Media,
        Langue: req.body.Langue,
        Titre: req.body.Titre,
        Signature: req.body.Signature,
        RedacteurAnimateur: req.body.RedacteurAnimateur,
        Themes: req.body.Themes,
        Unit: req.body.Unit,
        Tendance: req.body.Tendance,
        Lien: req.body.Lien,
        donnerAnnotations: req.body.donnerAnnotations,
        Travail: req.body.Travail,
        LienOutput: req.body.LienOutput,
       
   

    };

    Retombe.updateOne({ _id: req.body._id }, retombe).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});

// Traitement de get journaliste by id
app.get('/api/allRetombe/:id', (req, res) => {
    console.log('Hello in BE to get retombe by id');
    let id;
    let retombe = {};
   
    id = req.params.id;
    console.log('id', id);

    Retombe.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded retombe', doc);
            res.status(200).json({
                retombe: doc

            });

        }
    )

});




// Traitement de get All journalistes 
app.get('/api/allRetombes', (req, res) => {
    console.log('Hello in BE to get all retombe');

    Retombe.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                retombes: docs
            });
        }
    });



});



// traitement delete jounaliste
app.delete('/api/deleteRetombe/:id', (req, res) => {
    console.log('here in delete retombe');
    const id = req.params.id;
    console.log('id', id);
    Retombe.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});

// Traitement de get journaliste by id
app.get('/api/allRetombes/:id', (req, res) => {
    console.log('Hello in BE to get retombe by id');
    let id;
    let retombe = {};
   
    id = req.params.id;
    console.log('id', id);

    Retombe.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded retombe', doc);
            res.status(200).json({
                retombe: doc

            });

        }
    )

});

 // Traitement de Get Journalistes By Anniversaire
 app.post('/api/getJournalisteByDate', (req, res) => {
    console.log('Hello in BE to get retombe by');
    console.log('here search value', req.body.search);
    Retombe.find({
        $or: [
      { Periode:{ $regex: `.*${req.body.search}`}}
        ] 
    }).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    retombes: docs
                 
                });
                console.log(docs)
            }
        });
});

// Traitement de get journaliste by id
app.get('/api/allMedias/:id', (req, res) => {
    console.log('Hello in BE to get media by id');
    let id;
    let media = {};
   
    id = req.params.id;
    console.log('id', id);

    Media.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded media', doc);
            res.status(200).json({
                media: doc

            });

        }
    )

});

// Traitement de add media 
app.post('/api/addMedia', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in add media');
    let media = {};
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
     console.log( req.body);
    media = new Media({
        Media  :req.body.Media,
        TypeMedia  : req.body.TypeMedia,
        Neutralite  :req.body.Neutralite,
        Diffusion  :  req.body.Diffusion,
        Fondation  :  req.body.Fondation,
        Contenu  :  req.body.Contenu,
        Specialite  :req.body.Specialite,
        img:url+'/images/' + req.file.filename,
       Standard :req.body.Standard,
       Fax :req.body.Fax,
       Mail :req.body.Mail,
       Reseaux :req.body.Reseaux,
       Adresse : req.body.Adresse,
       Site : req.body.Site,
       DateBouclage :req.body.DateBouclage,
       Ondes  : req.body.Ondes,
       Zone  : req.body.Zone,
       Coordonnees :req.body.Coordonnees,
       Fondateur: req.body.Fondateur,
       Redacteur :req.body.Redacteur,
       Assistant  : req.body.Assistant,
       ChefDeRubriqueSport : req.body.ChefDeRubriqueSport,
       ChefDeRubriqueEconomie : req.body.ChefDeRubriqueEconomie,
       ChefDeRubriqueCulture  : req.body.ChefDeRubriqueCulture,
       ChefDeRubriqueNation  :  req.body.ChefDeRubriqueNation,
       ChefDeRubriqueInternational: req.body.ChefDeRubriqueInternational,
       Tirage   : req.body.Tirage,
       Distribution   : req.body.Distribution,
       Audience   : req.body.Audience,
       TarifsPublicitaires   :req.body.TarifsPublicitaires,
       Contact   :  req.body.Contact,
       Autre  :  req.body.Autre
       
      
    });
    console.log('addded media', media);

    media.save();

    res.status(200).json({
        message: "added media"

    });

});

// traitement edit Journaliste
app.put('/api/editMedia/:id', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in edit media',  req.body._id);
    console.log(req.body._id);
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    let media = {
        _id: req.body._id,
        Media  :req.body.Media,
        TypeMedia  : req.body.TypeMedia,
        Neutralite  :req.body.Neutralite,
        Diffusion  :  req.body.Diffusion,
        Fondation  :  req.body.Fondation,
        Contenu  :  req.body.Contenu,
        Specialite  :req.body.Specialite,
        img:url+'/images/' + req.file.filename,
       Standard :req.body.Standard,
       Fax :req.body.Fax,
       Mail :req.body.Mail,
       Reseaux :req.body.Reseaux,
       Adresse : req.body.Adresse,
       Site : req.body.Site,
       DateBouclage :req.body.DateBouclage,
       Ondes  : req.body.Ondes,
       Zone  : req.body.Zone,
       Coordonnees :req.body.Coordonnees,
       Fondateur: req.body.Fondateur,
       Redacteur :req.body.Redacteur,
       Assistant  : req.body.Assistant,
       ChefDeRubriqueSport : req.body.ChefDeRubriqueSport,
       ChefDeRubriqueEconomie : req.body.ChefDeRubriqueEconomie,
       ChefDeRubriqueCulture  : req.body.ChefDeRubriqueCulture,
       ChefDeRubriqueNation  :  req.body.ChefDeRubriqueNation,
       ChefDeRubriqueInternational: req.body.ChefDeRubriqueInternational,
       Tirage   : req.body.Tirage,
       Distribution   : req.body.Distribution,
       Audience   : req.body.Audience,
       TarifsPublicitaires   :req.body.TarifsPublicitaires,
       Contact   :  req.body.Contact,
       Autre  :  req.body.Autre

    };

    Media.updateOne({ _id: req.body._id }, media).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});

// Traitement de get All journalistes 
app.get('/api/allMedias', (req, res) => {
    console.log('Hello in BE to get all medias');

    Media.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                medias: docs
            });
        }
    });



});

// traitement delete media
app.delete('/api/deleteJournaliste/:id', (req, res) => {
    console.log('here in delete media');
    const id = req.params.id;
    console.log('id', id);
    Media.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});

 // Traitement de Get Journalistes By Name
 app.post('/api/getMediaByName', (req, res) => {
    console.log('Hello in BE to get medias by');
    console.log('here search value', req.body.search);
    Media.find({
      
        $or: [
            { Media: { $regex: `.*${req.body.search}` } }]
        
     } ).then(   
        (docs) => {
           
            if (docs) {
               
                res.status(200).json({
                    medias: docs
                 
                });
                console.log(docs)
            }
        });
});
module.exports = app;
