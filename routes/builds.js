const express = require('express');
const router = express.Router();

// @route   GET api/builds
// @desc    Get user's builds
// @access  Private
router.get('/', (req, res) => {
  res.json({ msg: 'Get all builds' });
});

// @route   POST api/builds
// @desc    Add a build
// @access  Private
router.post('/', (req, res) => {
  res.json({ msg: 'Add build' });
});

// @route   DELETE api/builds/:id
// @desc    Delete a build
// @access  Private
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete build' });
});

module.exports = router;
