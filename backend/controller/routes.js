import express from 'express';
import mongoose from 'mongoose';
import review from '../models/review.js';
import Universities from '../models/school';
import users from '../models/users';
import {school, username} from '../models/users';


export const getSchool = async (req, res) => { 
    var { school } = req.body;
    try {
        const results = await Universities.find({ school });
                
        res.status(200).json(results);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postReviews = (req, res) => {
    var { user, StarRating, review} = req.body;
    user = users.find({username});
    const newReview = new postReviews({ user, StarRating, review });

    const query = Universities.find({ school });
    const update = {
        $set: {
            review: newReview
        }
    }
    try {
         Universities.updateOne(query, update);
         res.status(200).json(newReview)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

