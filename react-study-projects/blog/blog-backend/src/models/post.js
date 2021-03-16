const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열 배열
    publishedDate: {
        type: Date,
        default: new Date() // 현재 날짜를 기본 값으로 지정
    }
});

const Author = new Schema({
    name: String,
    email: String
});

const Book = new Schema({
    title: String,
    description: String,
    authors: [Author], //스키마 안에 스키마를 내장시킬 수 있다.
    meta: {
        likes: Number
    },
    extra: Schema.Types.Mixed
});

module.exports = mongoose.model('Post', Post);