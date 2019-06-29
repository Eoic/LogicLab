import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: "Main page", message: "Hello there." });
});

export default router;