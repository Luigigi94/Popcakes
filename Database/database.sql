CREATE DATABASE ng_games_db;

USE comilona;

CREATE TABLE games(){
    gamesid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
}

create table Lugar_creacion(){
    lugarcreacionid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    lugar varchar(250));
}
create table Lugar_entrega{
    lugarentregaid int(11) NOT NULL AUTO_INCREMENT primary key,
    lugar varchar(250));
}
create table Medidas{
    medidasid INT(11) NOT NULL AUTO_INCREMENT primary key,
    nombre varchar(15));
}
create TABLE ingredientes(){
    ingredientesid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(30),
    perecederoid integer;
} ,
create TABLE Receta(){
    recetasid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50),
    precio double;
}
create TABLE Stock(){
    stockid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ingredientesid integer,
    cantidad double,
    medidasid integer,
    entrada timestamp,
    salida date;
}
create TABLE Perecedero(){
    perecederoid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion varchar(2);
}
create TABLE Users(){
    userid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(50),
    last_name varchar(50),
    phone varchar(10),
    emael varchar(50);
}
create TABLE Ordenes(){
    ordenid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userid integer,
    productoid integer,
    subtotal double,
    fecha_orden timestamp;
}
create TABLE Tickets(){
    ticketid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ordenid integer,
    total double,
    fecha_ticket date,
    lugarcreacionid integer,
    lugarentregaid integer;
}
create TABLE Productos(){
    productoid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recetasid integer,
    ingredientesid integer,
    cantidad double,
    medidasid int;
}
