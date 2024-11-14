export type TChipType = 'order_status' | 'payment_status' | 'order_type' | 'shipping_method' | 'quotation_status' | 'boolean'

export type TChipOrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled' | 'failed'
export type TChipPaymentStatus = 'pending' | 'completed' | 'cancelled'
export type TChipOrderType = 'vehicle' | 'ecommerce'
export type TChipShippingMethod = 'pickup' | 'delivery'
export type TChipQuotationStatus = 'pending' | 'sent' | 'rejected'
export type TChipBoolean = true | false

export type TChipStatus = TChipOrderStatus & TChipPaymentStatus & TChipOrderType & TChipShippingMethod & TChipQuotationStatus & TChipBoolean

export interface IChip {
  [key: keyof TChipStatus]: {
    [key: keyof TChipStatus]: {
      status: string
      bg: string
      color: string
    }
  }
}