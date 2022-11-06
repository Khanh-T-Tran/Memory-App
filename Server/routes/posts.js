import express from 'express';

const router = express.Router();

router.get('/', (reg, res) => {
    res.send('THIS WORKS!');
});

export default router;
