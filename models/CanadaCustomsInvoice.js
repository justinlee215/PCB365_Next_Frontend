import mongoose from "mongoose"

const CanadaCustomsInvoiceSchema = new mongoose.Schema({
    // [{step: Number}]: {
        // createdAt: {type: Date, default: Date.now},
        // updatedAt: {type: Date, default: Date.now},
        // timestamps: {
        //     createdAt: Date.now,
        //     updatedAt: Date.now
        //   },
        formType: String,
        shipperName: String,
        shipperContact: String,
        shipperAddress: String,
        shipperPhone: String,
    // },
    // step: {
        exporterName: String,
        exporterContact: String,
        exporterAddress: String,
        exporterPhone: String,
    // }
        otherRefNosName: String,
        consigneePhone: String,
        consigneeAddress: String,
        consigneeIRS: String,

        buyerPhone: String,
        buyerAddress: String,
        buyerIRS: String,
  
}, {collection: 'canada_customs_invoce_submission'}, {timestamps: true}, {timestamps: {
        createdAt: Date.now,
        updatedAt: Date.now
      }},)

module.exports = mongoose.models.CanadaCustomsInvoice || mongoose.model('CanadaCustomsInvoice', CanadaCustomsInvoiceSchema)

