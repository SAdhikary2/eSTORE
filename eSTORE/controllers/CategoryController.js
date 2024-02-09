const CategoryModel = require('../models/CategoryModel');
const slugify = require('slugify');


const createCategoryController = async(req,res)=>{


    try{
        const {name}= req.body
        if(!name){
            return res.status(401).send({namee:'Name is required'})

        }

        const existCategory = await CategoryModel.findOne({name});

        if(existCategory){
            return res.status(200).send({
                success:true,
                message:"category already exists",
            })
        }

        const category= await new CategoryModel({name,
            slug:slugify(name)
        }).save()
        res.status(201).send({
            success:true,
            message:"new category created",
            category
        })


    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"error in category",
        })
    }

}

module.exports=createCategoryController;