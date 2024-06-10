import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.post("/users", async(req, res) => {
    await prisma.user.create({
        data:{
            name:req.body.name,
            email: req.body.email,
            password:req.body.password,
            gender: req.body.gender
        }
    })
    res.status(201).json(req.body)
})

app.get("/users", async (req, res) => {
    const respose = await prisma.user.findMany()
    res.status(200).json(respose)
})

app.get("/users/:email", async (req, res) => {
    try {
        const response = await prisma.user.findUnique({
            where: {
                email: req.params.email
            }
        })
        if (response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: "User not found." })
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the user." })
    }
})




app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})