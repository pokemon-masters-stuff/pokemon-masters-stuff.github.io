const express = require('express');
const router = express.Router();

// @route   POST api/builds
// @desc    Add a build
// @access  Private
router.post('/', (req, res) => {
  res.json({ msg: 'Add build' });
});

// @route   GET api/builds
// @desc    Get user's builds
// @access  Private
router.get('/', (req, res) => {
  res.json({ msg: 'Get all builds' });
});

// @route    GET api/builds/:id
// @desc     Get build by ID
// @access   Private
router.get('/:id', (req, res) => {
  res.json({ msg: 'Get build by id' });
});

// @route   DELETE api/builds/:id
// @desc    Delete a build
// @access  Private
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete build' });
});

// @route    PUT api/builds/like/:id
// @desc     Like a build
// @access   Private
router.put('/:id', (req, res) => {
  res.json({ msg: 'Like build by id' });
});

module.exports = router;
