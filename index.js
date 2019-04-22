    const mysql = require('mysql');
    const express = require('express');
    const app = express();
    const bodyparser = require('body-parser');
    var jwt = require('jsonwebtoken');

    app.use(bodyparser.json());


        var mysqlConenction =mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'nasri@ahmed91',
            database:'api',
            multipleStatements: true
        });

        mysqlConenction.connect((err)=>{
        if(!err)
        console.log('DB Connection successful');
        else
        console.log('DB Connection failed \n Error : '+ JSON.stringify(err,undefined,2));

        });

    
    //Server runnig
    app.listen(3000,()=>console.log('Express Sever is runing at port N° 3000 '));

    

    //Afficher la liste de nombre

    app.get('/Numbers',(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        //res.setHeader("Content-Type", "text/json");
        //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader("Access-Control-Allow-Origin", "*");

    mysqlConenction.query('select * from labeltest',(err,rows,fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
    })
    });

    //Moyenne de la liste

    app.get('/Numbers/moyenne',(req,res)=>{
        mysqlConenction.query('select avg(numero) as Moyenne from labeltest',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
        })
    });
   

    //Medianne de la liste

    app.get('/Numbers/medianne',(req,res)=>{
        mysqlConenction.query('SELECT AVG(middle_values) AS medianne FROM ( SELECT t1.numero AS middle_values FROM ( SELECT @row:=@row+1 as `row`, x.numero FROM labeltest AS x, (SELECT @row:=0) AS r WHERE 1 ORDER BY x.numero ) AS t1, ( SELECT COUNT(*) as count FROM labeltest x WHERE 1 ) AS t2 WHERE t1.row >= t2.count/2 and t1.row <= ((t2.count/2) +1)) AS t3',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
    });

    //Afficher un nombre selon L'ID

    app.get('/Numbers/:id',(req,res)=>{
        mysqlConenction.query('select * from labeltest where IpId = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
    });

   
    //Supprimer une valeur

    app.delete('/Numbers/:id',(req,res)=>{
        mysqlConenction.query('delete from labeltest where IpId = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send('Deleted successfully');
        else
        console.log(err);
    })
    });


    //Ajouter une valeur

    app.post('/Numbers', (req, res) => {
        var postData  = req.body;
        mysqlConenction.query('INSERT INTO labeltest SET ?',postData,(err, rows, fields)=>{
            if(!err)
            console.log("Valeur ajoutée");
            else
            console.log(err);
         })
    });

           
    
    //Opérations mathématiques sur la liste
    //addition/ Liste Number
    
        app.get('/Numbers/add/:flightNo',(req,res)=>{
            var id = req.params.flightNo;
        
            mysqlConenction.query('select IpId,numero, (numero + '+id+') as soustraction  from labeltest group by IpId',(err,rows,fields)=>{
            if(!err)
            res.send(rows);
            else
            console.log(err);
    })

    });

    //Multiple Liste Number
    
        app.get('/Numbers/multi/:flightNo',(req,res)=>{
            var id = req.params.flightNo;
        
            mysqlConenction.query('select IpId,numero, (numero * '+id+') as soustraction  from labeltest group by IpId',(err,rows,fields)=>{
            if(!err)
            res.send(rows);
            else
            console.log(err);
    })

    });

     //soustraction Liste Number
    
     app.get('/Numbers/sous/:flightNo',(req,res)=>{
        var id = req.params.flightNo;
    
        mysqlConenction.query('select IpId,numero, (numero - '+id+') as soustraction  from labeltest group by IpId',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
    });

      //Division Liste Number
    
      app.get('/Numbers/div/:flightNo',(req,res)=>{
        var id = req.params.flightNo;
    
        mysqlConenction.query('select IpId,numero, (numero / '+id+') as soustraction  from labeltest group by IpId',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
    });
