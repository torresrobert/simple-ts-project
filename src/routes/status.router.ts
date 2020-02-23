import express from 'express';
import pjson from 'pjson';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/', (_req: any, res: any) => {
    res.send({ ok: true, app_name: pjson.name, version: pjson.version });
});

router.post('/restart', (req: any, res: any) => {
    try {
        if (req.body.key === process.env.RESTART_SECRET) {
            res.send({ ok: true, app_name: pjson.name, status: 'restarting' });
            process.exit(1);
        }
    } catch (error) {
        res.status(401).send({ ok: false, app_name: pjson.name, error: 'Invalid or missing passphrase' });
    }
});

export default router;
