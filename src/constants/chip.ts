import { IChip } from "../interfaces";

export const STATUS_CHIP: IChip = {
  order_status: {
    pending: {
      status: 'pending',
      bg: 'orange',
      color: 'white'

    },
    processing: {
      status: 'processing',
      bg: 'blue',
      color: 'white'
    },
    completed: {
      status: 'completed',
      bg: 'green',
      color: 'white'
    },
    cancelled: {
      status: 'cancelled',
      bg: 'red',
      color: 'white'
    },
    failed: {
      status: 'failed',
      bg: 'red',
      color: 'white'
    },
  },
  payment_status: {
    pending: {
      status: 'pending',
      bg: 'orange',
      color: 'white'
    },
    completed: {
      status: 'completed',
      bg: 'green',
      color: 'white'
    },
    cancelled: {
      status: 'cancelled',
      bg: 'red',
      color: 'white'
    },
  },
  order_type: {
    vehicle: {
      status: 'Vehicle',
      bg: 'blue',
      color: 'white'
    },
    ecommerce: {
      status: 'Shop',
      bg: 'green',
      color: 'white'
    }
  },
  shipping_method: {
    pickup: {
      status: 'Pickup',
      bg: 'blue',
      color: 'white'
    },
    delivery: {
      status: 'Delivery',
      bg: 'green',
      color: 'white'
    }
  },
  quotation_status: {
    pending: {
      status: 'pending',
      bg: 'orange',
      color: 'white'
    },
    sent: {
      status: 'sent',
      bg: 'green',
      color: 'white'
    },
    rejected: {
      status: 'rejected',
      bg: 'red',
      color: 'white'
    }
  },
  boolean: {
    true: {
      status: 'Active',
      bg: 'green',
      color: 'white'
    },
    false: {
      status: 'Inactive',
      bg: 'red',
      color: 'white'
    }
  }
}
