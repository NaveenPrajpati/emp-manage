const express = require("express");

const { getAllcont, addEmp, deleteEmp, updateEmp, getEmpId, getEmpName } = require("../controller/empController");


const router = express.Router();


router.get("/employee", getAllcont);

router.get("/employee/:id",getEmpId);
router.get("/employee/user/:name",getEmpName);

// Add a new document to the collection
router.post("/employee", addEmp);

router.delete("/employee/:id", deleteEmp);

router.put("/employee/:id", updateEmp);


module.exports = router;