import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: "TM001",
    },
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    Number: {
      type: String,
      required: true,
      default: 0,
    },
    Address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
export default TeamMember;
