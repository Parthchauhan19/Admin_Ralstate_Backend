// teamMemberRoutes.js
import express from "express";
import {
    createTeamMember,
    getAllTeamMember,
    getTeamMemberByEmployee,
    updateTeamMember,
    deleteTeamMember,
} from "../Controller/teammember.js";

export const TeamMember_Routes = express.Router();

TeamMember_Routes.post("/create", createTeamMember);
TeamMember_Routes.get("/getAll", getAllTeamMember);
TeamMember_Routes.get("/employee/:employe", getTeamMemberByEmployee);
TeamMember_Routes.put("/update/:employe", updateTeamMember);
TeamMember_Routes.delete("/delete/:employe", deleteTeamMember);