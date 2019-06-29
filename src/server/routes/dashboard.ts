import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    res.render('dashboard', { title: "Dashboard" })
});

export { router as dashboard };
