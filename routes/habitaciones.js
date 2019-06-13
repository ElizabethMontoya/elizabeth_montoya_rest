const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  let habitacion = DB.select('habitaciones')
  res.status(200).send(habitacion)
});

// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let habitacion = DB.select('habitaciones', id)
  res.status(200).send(habitacion)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let habitacion = DB.insert('habitaciones', req.body)
  res.status(200).send(habitacion)
})

// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let habitacion = DB.update('habitaciones', object)
  res.status(200).send(habitacion)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let habitacion = DB.remove('habitaciones', id)
  res.status(200).send(habitacion)
})

module.exports = router;
