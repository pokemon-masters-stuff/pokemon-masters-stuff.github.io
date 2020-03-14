const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Build = require('../models/Build');

// @route   POST api/builds
// @desc    Publish a build
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('buildName', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const newBuild = new Build({
        username: user.username,
        user: req.user.id,
        buildName: req.body.buildName,
        description: req.body.description,
        pokemon: req.body.pokemon,
        selectedCellsById: req.body.selectedCellsById,
        remainingEnergy: req.body.remainingEnergy,
        orbSpent: req.body.orbSpent,
        url: req.body.url
      });

      const build = await newBuild.save();

      res.json(build);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/builds
// @desc    Get all builds
// @access  Public
router.get('/', async (req, res) => {
  const filter = req.query.filter;
  const sort = req.query.sort || 'popular';
  const limit = parseInt(req.query.limit);
  const skip = parseInt(req.query.skip);
  let builds;
  let totalCount;
  try {
    if (sort === 'newest') {
      builds = filter
        ? await Build.find({ pokemon: filter })
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit)
        : await Build.find()
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);
    } else if (sort === 'oldest') {
      builds = filter
        ? await Build.find({ pokemon: filter })
            .sort({ date: 1 })
            .skip(skip)
            .limit(limit)
        : await Build.find()
            .sort({ date: 1 })
            .skip(skip)
            .limit(limit);
    } else {
      builds = filter
        ? await Build.aggregate([
            { $match: { pokemon: filter } },
            { $addFields: { likesCount: { $size: '$likes' } } },
            { $sort: { likesCount: -1 } }
          ])
            .skip(skip)
            .limit(limit)
        : await Build.aggregate([
            { $addFields: { likesCount: { $size: '$likes' } } },
            { $sort: { likesCount: -1 } }
          ])
            .skip(skip)
            .limit(limit);
    }

    totalCount = filter
      ? await Build.find({
          pokemon: filter
        }).countDocuments()
      : await Build.find().countDocuments();

    res.json({ builds, totalCount });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/builds/users
// @desc    Get user's builds
// @access  Private
router.get('/users', auth, async (req, res) => {
  const filter = req.query.filter;
  const sort = req.query.sort || 'popular';
  const limit = parseInt(req.query.limit);
  const skip = parseInt(req.query.skip);
  const userId = mongoose.Types.ObjectId(req.user.id);
  let builds;
  let totalCount;
  try {
    if (sort === 'newest') {
      builds = filter
        ? await Build.find({ pokemon: filter, user: req.user.id })
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit)
        : await Build.find({ user: req.user.id })
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);
    } else if (sort === 'oldest') {
      builds = filter
        ? await Build.find({ pokemon: filter, user: req.user.id })
            .sort({ date: 1 })
            .skip(skip)
            .limit(limit)
        : await Build.find({ user: req.user.id })
            .sort({ date: 1 })
            .skip(skip)
            .limit(limit);
    } else {
      builds = filter
        ? await Build.aggregate([
            { $match: { $and: [{ pokemon: filter }, { user: userId }] } },
            { $addFields: { likesCount: { $size: '$likes' } } },
            { $sort: { likesCount: -1, date: -1 } }
          ])
            .skip(skip)
            .limit(limit)
        : await Build.aggregate([
            { $match: { user: userId } },
            { $addFields: { likesCount: { $size: '$likes' } } },
            { $sort: { likesCount: -1, date: -1 } }
          ])
            .skip(skip)
            .limit(limit);
    }
    totalCount = filter
      ? await Build.find({
          pokemon: filter,
          user: req.user.id
        }).countDocuments()
      : await Build.find({ user: req.user.id }).countDocuments();

    res.json({ builds, totalCount });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/builds/liked
// @desc    Get liked builds
// @access  Private
router.get('/liked', auth, async (req, res) => {
  const filter = req.query.filter;
  const sort = req.query.sort || 'popular';
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  const userId = mongoose.Types.ObjectId(req.user.id);
  let builds;
  let totalCount;
  try {
    if (sort === 'newest') {
      builds = filter
        ? await Build.find({
            pokemon: filter,
            likes: { $elemMatch: { user: req.user.id } }
          })
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit)
        : await Build.find({ likes: { $elemMatch: { user: req.user.id } } })
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);
    } else if (sort === 'oldest') {
      builds = filter
        ? await Build.find({
            pokemon: filter,
            likes: { $elemMatch: { user: req.user.id } }
          })
            .sort({ date: 1 })
            .skip(skip)
            .limit(limit)
        : await Build.find({ likes: { $elemMatch: { user: req.user.id } } })
            .sort({ date: 1 })
            .skip(skip)
            .limit(limit);
    } else {
      builds = filter
        ? await Build.aggregate([
            {
              $match: {
                $and: [
                  { pokemon: filter },
                  { likes: { $elemMatch: { user: userId } } }
                ]
              }
            },
            { $addFields: { likesCount: { $size: '$likes' } } },
            { $sort: { likesCount: -1 } }
          ])
            .skip(skip)
            .limit(limit)
        : await Build.aggregate([
            { $match: { likes: { $elemMatch: { user: userId } } } },
            { $addFields: { likesCount: { $size: '$likes' } } },
            { $sort: { likesCount: -1 } }
          ])
            .skip(skip)
            .limit(limit);
    }
    totalCount = filter
      ? await Build.find({
          pokemon: filter,
          user: req.user.id
        }).countDocuments()
      : await Build.find({
          likes: { $elemMatch: { user: req.user.id } }
        }).countDocuments();

    res.json({ builds, totalCount });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/builds/:id
// @desc     Get build by ID
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const build = await Build.findById(req.params.id);

    if (!build) {
      return res.status(404).json({ msg: 'Build not found' });
    }
    res.json(build);
  } catch (error) {
    console.error(error.message);
    if (!error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Build not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   EDIT api/builds/edit/:id
// @desc    Edit a build
// @access  Private
router.put('/edit/:id', auth, async (req, res) => {
  try {
    const build = await Build.findByIdAndUpdate(
      req.params.id,
      {
        description: req.body.description
      },
      { new: true }
    );
    if (!build) {
      return res.status(404).json({ msg: 'Build not found' });
    }
    res.json(build.description);
  } catch (error) {
    if (!error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Build not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/builds/like/:id
// @desc     Like a build
// @access   Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const build = await Build.findById(req.params.id);

    if (!build) {
      return res.status(404).json({ msg: 'Build not found' });
    }

    // Check if the build has already been liked by the user
    if (
      build.likes.filter(like => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: 'Build already liked' });
    }
    build.likes.unshift({ user: req.user.id });

    await build.save();

    res.json(build.likes);
  } catch (error) {
    console.error(error.message);
    if (!error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Build not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/builds/unlike/:id
// @desc     Unlike a build
// @access   Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const build = await Build.findById(req.params.id);

    if (!build) {
      return res.status(404).json({ msg: 'Build not found' });
    }

    // Check if the build has already been liked by the user
    if (
      build.likes.filter(like => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Build has not yet been liked' });
    }

    // Get remove index
    const removeIndex = build.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    build.likes.splice(removeIndex, 1);

    await build.save();

    res.json(build.likes);
  } catch (error) {
    console.error(error.message);
    if (!error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Build not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/builds/:id
// @desc    Delete a build
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const build = await Build.findById(req.params.id);

    if (!build) {
      return res.status(404).json({ msg: 'Build not found' });
    }

    // Check user
    if (build.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await build.remove();

    res.json({ msg: 'Build removed' });
  } catch (error) {
    console.error(error.message);
    if (!error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Build not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/builds/comment/:id
// @desc    Comment on a build
// @access  Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const build = await Build.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        username: user.username,
        user: req.user.id
      };
      build.comments.unshift(newComment);

      await build.save();

      res.json(build.comments);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/builds/comment/:id/:comment_id
// @desc    Delete a comment
// @access  Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const build = await Build.findById(req.params.id);
    // Pull out comment
    const comment = await build.comments.find(
      comment => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = build.comments
      .map(comment => comment.user.toString())
      .indexOf(req.user.id);

    build.comments.splice(removeIndex, 1);

    await build.save();

    res.json(build.comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
