import express from 'express';
import { handleSearchAction } from '../controller/controller';

export const router = express.Router();

router.use(express.json());

router
    .get("/", (req, res) => { handleSearchAction(req, res) });