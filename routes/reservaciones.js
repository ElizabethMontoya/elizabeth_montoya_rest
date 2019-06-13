const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  let reservacion = DB.select('reservaciones')
  res.status(200).send(reservacion)
});

// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let reservacion = DB.select('reservaciones', id)
  res.status(200).send(reservacion)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let reservacion = DB.insert('reservaciones', req.body)
  res.status(200).send(reservacion)
})

// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let reservacion = DB.update('reservaciones', object)
  res.status(200).send(reservacion)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let reservacion = DB.remove('reservaciones', id)
  res.status(200).send(reservacion)
})

module.exports = router;
