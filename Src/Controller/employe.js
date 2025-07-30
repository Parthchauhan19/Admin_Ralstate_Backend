// import Employee from "../models/Employee";
// import { validateEmployee } from "../utils/validation";

// const Employee = require("../models/Employee");
// const { validateEmployee } = require("../utils/validation");

// // @desc    Get all employees
// // @route   GET /api/employees
// // @access  Public
// const getEmployees = async (req, res, next) => {
//   try {
//     const { page = 1, limit = 20, sort = "-createdAt" } = req.query;

//     const employees = await Employee.find()
//       .sort(sort)
//       .limit(limit * 1)
//       .skip((page - 1) * limit);

//     const total = await Employee.countDocuments();

//     res.status(200).json({
//       status: "success",
//       data: {
//         employees,
//         pagination: {
//           current: page,
//           pages: Math.ceil(total / limit),
//           total,
//         },
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Get single employee
// // @route   GET /api/employees/:id
// // @access  Public
// const getEmployee = async (req, res, next) => {
//   try {
//     const employee = await Employee.findById(req.params.id);

//     if (!employee) {
//       return res.status(404).json({
//         status: "error",
//         message: "Employee not found",
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       data: { employee },
//     });
//   } catch (error) {
//     if (error.name === "CastError") {
//       return res.status(400).json({
//         status: "error",
//         message: "Invalid employee ID",
//       });
//     }
//     next(error);
//   }
// };

// // @desc    Create new employee
// // @route   POST /api/employees
// // @access  Public
// const createEmployee = async (req, res, next) => {
//   try {
//     const { error } = validateEmployee(req.body);
//     if (error) {
//       return res.status(400).json({
//         status: "error",
//         message: error.details[0].message,
//       });
//     }

//     // Check if employee already exists
//     const existingEmployee = await Employee.findOne({
//       employe: req.body.employe,
//     });
//     if (existingEmployee) {
//       return res.status(400).json({
//         status: "error",
//         message: "Employee with this name already exists",
//       });
//     }

//     const employee = await Employee.create(req.body);

//     res.status(201).json({
//       status: "success",
//       data: { employee },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Update employee
// // @route   PUT /api/employees/:id
// // @access  Public
// const updateEmployee = async (req, res, next) => {
//   try {
//     const { error } = validateEmployee(req.body);
//     if (error) {
//       return res.status(400).json({
//         status: "error",
//         message: error.details[0].message,
//       });
//     }

//     const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!employee) {
//       return res.status(404).json({
//         status: "error",
//         message: "Employee not found",
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       data: { employee },
//     });
//   } catch (error) {
//     if (error.name === "CastError") {
//       return res.status(400).json({
//         status: "error",
//         message: "Invalid employee ID",
//       });
//     }
//     next(error);
//   }
// };

// // @desc    Delete employee
// // @route   DELETE /api/employees/:id
// // @access  Public
// const deleteEmployee = async (req, res, next) => {
//   try {
//     const employee = await Employee.findByIdAndDelete(req.params.id);

//     if (!employee) {
//       return res.status(404).json({
//         status: "error",
//         message: "Employee not found",
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       message: "Employee deleted successfully",
//     });
//   } catch (error) {
//     if (error.name === "CastError") {
//       return res.status(400).json({
//         status: "error",
//         message: "Invalid employee ID",
//       });
//     }
//     next(error);
//   }
// };

// // @desc    Get employee statistics
// // @route   GET /api/employees/stats
// // @access  Public
// const getEmployeeStats = async (req, res, next) => {
//   try {
//     const stats = await Employee.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalEmployees: { $sum: 1 },
//           totalNewVisits: { $sum: "$Newvisites" },
//           totalRevisits: { $sum: "$revisites" },
//           totalProperties: { $sum: "$Property" },
//           avgNewVisits: { $avg: "$Newvisites" },
//           avgRevisits: { $avg: "$revisites" },
//           avgProperties: { $avg: "$Property" },
//         },
//       },
//     ]);

//     res.status(200).json({
//       status: "success",
//       data: { stats: stats[0] || {} },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = {
//   getEmployees,
//   getEmployee,
//   createEmployee,
//   updateEmployee,
//   deleteEmployee,
//   getEmployeeStats,
// };

