//Ejecutar el comando (antes de inicializar el servidor): npm install express -E
//Inicializar server: node --watch app.js

//datos de usuarios
    const usersData = [
        { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
        { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
        { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
        { id: 4, name: 'David', age: 25, specialty: 'QAs' },
        { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
        { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
        { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
        { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
        { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
        { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
        { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
        { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
        { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
        { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
        { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
        { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
        { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
        { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
        { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
        { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
        { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
        { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
        { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
        { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
        { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
        { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
        { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
        { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
        { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
        { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
      ];




const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send(
        '<h1>Home express</h1> <a href="/developers">Developers</a> <br> <a href="/QAs">QAs</a> <br> <a href="/ventas">Ventas</a> <br> <a href="/marketing">Marketing</a> <br> <a href="/notdfined">Ruta no definida</a>'
    );
    console.log(req.path);
})

app.get('/developers',(req,res)=>{
    const usuarios=usersData.filter((usuario)=> usuario.specialty==="developers");
    //console.log(usuarios)
    let usuario=[];
    usuarios.map((i)=>{
        usuario+=`<li><strong>ID:</strong> ${i.id} | <strong>Nombre:</strong> ${i.name} | <strong>Edad:</strong> ${i.age} | <strong>Especialidad:</strong> ${i.specialty}</li>`;
    });
    res.send(`<h1>Home developers</h1> <a href="/">Home</a> <h2>Numero de usuarios: ${usuarios.length}</h2> <ul>${usuario}</ul>`);
    console.log(req.path);
})

app.get('/QAs',(req,res)=>{
    const usuarios=usersData.filter((usuario)=> usuario.specialty==="QAs");
    //console.log(usuarios)
    let usuario=[];
    usuarios.map((i)=>{
        usuario+=`<li><strong>ID:</strong> ${i.id} | <strong>Nombre:</strong> ${i.name} | <strong>Edad:</strong> ${i.age} | <strong>Especialidad:</strong> ${i.specialty}</li>`;
    });
    res.send(`<h1>Home QAs</h1> <a href="/">Home</a> <h2>Numero de usuarios: ${usuarios.length}</h2> <ul>${usuario}</ul>`);
    console.log(req.path);
})

app.get('/ventas',(req,res)=>{
     const usuarios=usersData.filter((usuario)=> usuario.specialty==="ventas");
    //console.log(usuarios)
    let usuario=[];
    usuarios.map((i)=>{
        usuario+=`<li><strong>ID:</strong> ${i.id} | <strong>Nombre:</strong> ${i.name} | <strong>Edad:</strong> ${i.age} | <strong>Especialidad:</strong> ${i.specialty}</li>`;
    });
    res.send(`<h1>Home ventas</h1> <a href="/">Home</a> <h2>Numero de usuarios: ${usuarios.length}</h2> <ul>${usuario}</ul>`);
    console.log(req.path);
})

app.get('/marketing',(req,res)=>{
    const usuarios=usersData.filter((usuario)=> usuario.specialty==="marketing");
    //console.log(usuarios)
    let usuario=[];
    usuarios.map((i)=>{
        usuario+=`<li><strong>ID:</strong> ${i.id} | <strong>Nombre:</strong> ${i.name} | <strong>Edad:</strong> ${i.age} | <strong>Especialidad:</strong> ${i.specialty}</li>`;
    });

    res.send(`<h1>Home marketing</h1> <a href="/">Home</a> <h2>Numero de usuarios: ${usuarios.length}</h2> <ul>${usuario}</ul>`);
    console.log(req.path);
})

app.use((req,res)=>{
    res.status(404).send('<h1>Pagina no encontrada</h1> <h2>ERROR 404</h2><a href="/">Home</a>');
    console.log(req.path);
})

app.listen(3000,()=>{
    console.log('Express.js esta escuchando por el puerto 3000');
})