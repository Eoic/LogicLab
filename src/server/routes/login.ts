import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    res.render('login', { title: "Login page" });
});

export { router as login };
