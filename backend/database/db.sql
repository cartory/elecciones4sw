--create DATABASE parcial2sw;

create TABLE if not EXISTS localidades (
  id serial PRIMARY KEY,
  tipo varchar(20),
  nombre VARCHAR(30),
  circunscripcion INTEGER,
  localidad_id INTEGER
);

ALTER TABLE localidades
add FOREIGN KEY (localidad_id)
REFERENCES localidades(id);

CREATE TABLE if not EXISTS recintos (
  id serial PRIMARY KEY,
  nombre VARCHAR(30)
);

create table if not EXISTS mesas (
  id serial PRIMARY KEY,
  codigo BIGINT not null,
  nro INTEGER not null,
  apertura date,
  cierre date,
  recinto_id INTEGER REFERENCES recintos(id)
);

create TABLE if not EXISTS partidos(
  id serial PRIMARY KEY,
  nombre VARCHAR(50),
  icono text,
  sigla VARCHAR(20) not null
);

create TABLE if not EXISTS votos (
  id serial PRIMARY KEY,
  tipo varchar(10) not null,
  cantidad BIGINT not null,
  cargo VARCHAR(10) not NULL,
  
  partido_id INTEGER REFERENCES partidos(id),
  mesa_id INTEGER REFERENCES mesas(ID)
);

create TABLE if not EXISTS personas (
  cedula BIGINT PRIMARY KEY,
  nombres VARCHAR(10) not NULL,
  apellido1 VARCHAR(15) not NULL,
  apellido2 VARCHAR(20),
  telefono BIGINT,
  fechaNacimiento date,
  direccion TEXT,
  genero BOOLEAN,
  delegado BOOLEAN,
  secretario BOOLEAN,
  presidente boolean,
  vocal BOOLEAN,
  candidato BOOLEAN,
  cargo VARCHAR(20),
  titularidad VARCHAR(10),
  descripcion text,
  observaciones TEXT,
  localidad_id INTEGER REFERENCES localidades(ID),
  partido_id INTEGER REFERENCES partidos(ID)
);