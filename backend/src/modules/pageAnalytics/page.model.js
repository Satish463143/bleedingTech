const mongoose = require('mongoose')

const pageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }, // null for guest visitors
    sessionId: { type: String, required: true }, // unique per visit
    page: { type: String, required: true }, // e.g. "/product/123"
    referrer: { type: String, default: null }, // where they came from (optional)
    device: { type: String, default: "desktop" }, // desktop, mobile, tablet (optional)

    duration: { type: Number, default: 0 }, // time spent on page in seconds
    timestamp: { type: Date, default: Date.now }
},{
    timestamps: true,
    autoIndex: true,
    autoCreate: true
})

const PageModel = mongoose.model('Page', pageSchema)

module.exports = PageModel