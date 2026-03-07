import express  from "express"
import { createNote, deleteNote, getNote, updateNote } from "../controllers/note.controller.js"

const router = express.Router()

router.post("/createnote",createNote)
router.get("/getnote",getNote)
router.put("/updatenote/:id",updateNote)
router.delete("/deletenote/:id",deleteNote)

export default router;