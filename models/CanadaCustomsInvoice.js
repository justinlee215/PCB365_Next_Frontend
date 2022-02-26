import mongoose from "mongoose"

const CanadaCustomsInvoiceSchema = new mongoose.Schema({
    name: String,
    email: String
})

module.exports = mongoose.models.CanadaCustomsInvoice || mongoose.model('CanadaCustomsInvoice', CanadaCustomsInvoiceSchema)
