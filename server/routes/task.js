const express  = require('express')

const router = express.Router()

// @ /api/task/create 
router.post('/create',(req,res)=>{
    console.log("Post")
});


// @ /api/task
router.get('/' ,(req,res)=>{
    console.log("Post")
})


// @ /api/task/123
router.get('/:id',(req,res)=>{
    console.log("Post")
})

// @ /api/task/124
router.put('/:id', (req,res)=>{
    console.log("Post")
});

// @ /api/task/124
router.delete('/:id', (req,res)=>{
    console.log("Post")
});

export default router;