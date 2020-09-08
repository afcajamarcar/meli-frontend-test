import express from 'express';
import { handleSearchAction, handleItemSearchAction } from '../controller/controller';

export const router = express.Router();

router.use(express.json());

router
    .get("/", (req, res) => { handleSearchAction(req, res) });

router
    .get("/:id", (req, res) => { handleItemSearchAction(req, res) });