const express = require('express');
const router =express.Router();
const mongoose = require('mongoose');

const video = require('../models/video');


const db="mongodb://uservaibhav:vaibhav123@ds161584.mlab.com:61584/videoplayerdemo" 
mongoose.Promise=global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error .. !" +err);
    }
});


router.get('/videos', function(req, res){
    console.log('Get Request for all videos');
    video.find({})
    .exec(function(err, videos){
        if(err){
            console.log("Error Retriving videos");
        }else{
            res.json(videos);
        }
    });
});



router.get('/videos/:id', function(req, res){
    console.log('Get Request for Single videos');
    video.findById(req.params.id)
    .exec(function(err, videos){
        if(err){
            console.log("Error Retriving videos");
        }else{
            res.json(videos);
        }
    });
});

router.post('/video', function(req, res){
    console.log('Post a Video');
    var newVideo = new video();
     newVideo.title = req.body.title;
     newVideo.url = req.body.url;
     newVideo.description = req.body.description;

     newVideo.save(function(err, insertedVideo){
         if(err){
             console.log('Error Saving video');
         }else{
             res.json(insertedVideo);
         }
     });
});



router.put('/video/:id', function(req,res){
    console.log('Update a Video...');
    video.findByIdAndUpdate(req.params.id,
    {
        $set:{title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new : true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating Video..");
        }else{
            res.json(updatedVideo);
        }
    });             
});


router.delete('/video/:id', function(req, res){
    console.log('delete video');
    video.findByIdAndRemove(req.params.id, function(err,deletedVideo){
        if(err){
            res.send("Error video deleting..");
        }else{
            res.json(deletedVideo);
        }
    });
});


module.exports= router;
