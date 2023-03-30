const Set = require('../models/set');
// const Pokemon = require('../models/pokemon');

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    Set.find()
        .then(sets => {
            res.status(200).json({
                message: "Sets fetched successfully",
                sets: sets
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
});

router.post('/', (req, res, next) => {
    const set = new Set({
        id: req.body.id,
        name: req.body.name,
        pokemon: req.body.pokemon
    });

    set.save()
        .then(createdSet => {
            res.status(201).json({
                message: 'Set added successfully',
                set: createdSet
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
});

router.put('/:id', (req, res, next) => {
    Set.findOne({ id: req.params.id })
        .then(set => {
            set.name = req.body.name;
            set.pokemon = req.body.pokemon;

            // console.log(set);

            Set.updateOne({ id: req.params.id }, set)
                .then(result => {
                    res.status(204).json({
                        message: 'Set updated successfully'
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred',
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Set not found.',
                error: error
            });
        });
});

router.delete("/:id", (req, res, next) => {
    Set.findOne({ id: req.params.id })
        .then(set => {
            Set.deleteOne({ id: req.params.id })
                .then(result => {
                    res.status(204).json({
                        message: "Set deleted successfully"
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred',
                        error: error
                    });
                })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Set not found.',
                error: error
            });
        });
});

module.exports = router;
