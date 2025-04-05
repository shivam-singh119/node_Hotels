const person = require("../model/person");






const getAllPersons = async (req, res) => {
    const Persons = await person.find({});
    try {
        res.status(200).json({
            status: true,
            message: "All user retained successfully",
            data: Persons
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}





const getPerson = async (req, res) => {
    const { id } = req.params;
    const user = await person.findById(id);
    try {
        // if (!id) {
        //     res.status(404).json({
        //         status: true,
        //         message: "Person not find Invalid user id ",

        //     })
        // }
        res.status(200).json({
            status: true,
            message: "User find successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}





const createPerson = async  (req, res)=> {
    try {
        const user = await person.create(req.body);
        res.status(200).json({
            status: true,
            message: "User created succefully",
            data: user

        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}





const updatePerson = async (req, res) => {
   
    try {
        const { id } = req.params;
        const user = await person.findByIdAndUpdate(id, req.body)
        if (!user) {
            return res.status(404).json({ status: true, message: "User not found" })
        }
        const updatePerson = await person.findById(id);
        res.status(200).json({
            status: true,
            message: "Person updated successfully",
            data:user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}





const deletePerson = async  (req, res) =>{
    try {
        const { id } = req.params;
        const user = await person.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json({
            status: true,
            message: "Person deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}





module.exports = {
    getAllPersons,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
}