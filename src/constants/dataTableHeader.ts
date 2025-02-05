import { IDataTableHeader } from "../interfaces";

export const DEFAULT_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Action",
    key: "action",
    type: "action"
  }
]

export const PRODUCT_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Model",
    key: "model",
    type: "text"
  },
  {
    title: "Title",
    key: "title",
    type: "text"
  },
  {
    title: "Status",
    key: "is_visible",
    type: "text",
    // values: {
    //   true: "Active",
    //   false: "Inactive"
    // }
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "view",
        display: 'icon',
        icon: 'view',
        text: "view",
      },
      // {
      //   type: "edit",
      //   display: 'icon',
      //   icon: 'edit',
      //   text: "edit",
      // },

    ]
  }
]

export const PRODUCT_CATEGORY_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Name",
    key: "name",
    type: "text"
  },
  {
    title: "Slug",
    key: "slug",
    type: "text"
  },
  {
    title: "Description",
    key: "description",
    type: "text"
  },
  {
    title: "Visibility",
    key: "is_visible",
    type: "text",
    // values: {
    //   true: "Active",
    //   false: "Inactive"
    // }
  },
  {
    title: "Status",
    key: "is_active",
    type: "text",
    // values: {
    //   true: "Active",
    //   false: "Inactive"
    // }
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    // actions: [
    //   {
    //     type: "details",
    //     title: "Details",
    //     color: "gray"
    //   }
    // ]
  }
]

export const PRODUCT_INTERIOR_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Interior Image",
    key: "interior_image",
    type: "image"
  },
  {
    title: "Interior Type",
    key: "interior_type",
    type: "text"
  },
  {
    title: "Title",
    key: "interior_title",
    type: "text"
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "edit",
        display: 'icon',
        icon: 'edit',
        text: "edit",
      },
      {
        type: "delete",
        display: 'icon',
        icon: 'delete',
        text: "delete",
      },

    ]
  }
]

export const PRODUCT_SPECIFICATION_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Specification Category",
    key: "category_name",
    type: "text"
  },
  {
    title: "Specification Name",
    key: "specification_name",
    type: "text"
  },
  {
    title: "Specification Value",
    key: "specification_value",
    type: "text"
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "edit",
        display: 'icon',
        icon: 'edit',
        text: "edit",
      },
      {
        type: "delete",
        display: 'icon',
        icon: 'delete',
        text: "delete",
      },

    ]
  }
]

export const SPECIFICATION_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Name",
    key: "name",
    type: "text"
  },
  {
    title: "Status",
    key: "is_active",
    type: "text"
  },
  {
    title: "Action",
    key: "action",
    type: "action"
  }
]

export const SPECIFICATION_CATEGORY_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Name",
    key: "name",
    type: "text"
  },
  {
    title: "Status",
    key: "is_active",
    type: "text"
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "edit",
        display: 'icon',
        icon: 'edit',
        text: "edit",
      },
      {
        type: "delete",
        display: 'icon',
        icon: 'delete',
        text: "delete",
      },

    ]
  }
]

export const CONFIGURATION_PAINT_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Name",
    key: "name",
    type: "text"
  },
  {
    title: "Hex Code",
    key: "hex",
    type: "text"
  },
  {
    title: "Image",
    key: "image",
    type: "image"
  },
  {
    title: "Status",
    key: "is_active",
    type: "text",
    // values: {
    //   true: "Active",
    //   false: "Inactive"
    // }
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "edit",
        display: 'icon',
        icon: 'edit',
        text: "edit",
      },
      {
        type: "delete",
        display: 'icon',
        icon: 'delete',
        text: "delete",
      },

    ]
  }
]

export const CONFIGURATION_WHEEL_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Name",
    key: "name",
    type: "text"
  },
  // {
  //   title: "Description",
  //   key: "description",
  //   type: "text"
  // },
  {
    title: "Image",
    key: "image",
    type: "image"
  },
  {
    title: "Status",
    key: "is_active",
    type: "text",
    // values: {
    //   true: "Active",
    //   false: "Inactive"
    // }
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "edit",
        display: 'icon',
        icon: 'edit',
        text: "edit",
      },
      {
        type: "delete",
        display: 'icon',
        icon: 'delete',
        text: "delete",
      },

    ]
  }
]

export const CONFIGURATION_INTERIOR_COLOR_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Name",
    key: "name",
    type: "text"
  },
  {
    title: "Hex Code",
    key: "hex",
    type: "text"
  },
  {
    title: "Image",
    key: "image",
    type: "image"
  },
  {
    title: "Status",
    key: "is_active",
    type: "jsx",
    // values: {
    //   true: "Active",
    //   false: "Inactive"
    // }
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "edit",
        display: 'icon',
        icon: 'edit',
        text: "edit",
      },
      {
        type: "delete",
        display: 'icon',
        icon: 'delete',
        text: "delete",
      },

    ]
  }
]

export const CONFIGURATION_PLATFORM_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "text"
  },
  {
    title: "Section Name",
    key: "section_name",
    type: "text"
  },
  {
    title: "Name",
    key: "configuration_name",
    type: "text"
  },
  {
    title: "Type",
    key: "configuration_type",
    type: "text"
  },
  {
    title: "Title",
    key: "configuration_title",
    type: "text"
  },
  {
    title: "Value",
    key: "configuration_value",
    type: "text"
  },
  {
    title: "Content URL",
    key: "configuration_content_url",
    type: "image"
  },
  {
    title: "Status",
    key: "is_active",
    type: "text"
  },
]

export const ORDER_TABLE_HEADER: IDataTableHeader[] = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Order ID",
    key: "order_number",
    type: "text"
  },
  {
    key: 'total_amount',
    title: 'Total Amount',
    type: 'text'
  },
  {
    key: 'order_status',
    title: 'Order Status',
    type: 'jsx'
  },
  {
    key: 'payment_status',
    title: 'Payment Status',
    type: 'jsx'
  },
  {
    key: 'order_type',
    title: 'Order Type',
    type: 'jsx'
  },
  {
    key: 'created_at',
    title: 'Created At',
    type: 'text'
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "view",
        display: 'icon',
        icon: 'view',
        text: "view",
      }
    ]
  }
]

export const ORDER_TABLE_ITEM_HEADER: IDataTableHeader[] = [
  {
    title: 'Title',
    key: 'title',
    type: 'text'
  },
  {
    title: 'Selling Cost',
    key: 'selling_cost',
    type: 'text'
  },
  {
    title: 'Price',
    key: 'booking_cost',
    type: 'text'
  },
  {
    title: 'Paint',
    key: 'paint.name',
    type: 'text'
  },
  {
    title: 'Wheel',
    key: 'wheel.name',
    type: 'text'
  },
  {
    title: 'Interior Color',
    key: 'interior_color.name',
    type: 'text'
  }
]

export const ORDER_TABLE_PAYMENT_HEADER: IDataTableHeader[] = [
  {
    title: 'Payment ID',
    key: 'payment_number',
    type: 'text'
  },
  {
    title: 'Payment Amount',
    key: 'amount',
    type: 'text'
  },
  {
    title: 'Trx ID',
    key: 'transaction_id',
    type: 'text'
  },
  {
    title: 'Payment Method',
    key: 'payment_method',
    type: 'text'
  },
  {
    title: 'Payment Status',
    key: 'payment_status',
    type: 'text'
  },
  {
    title: 'Created At',
    key: 'created_at',
    type: 'text'
  }
]

export const QUOTATION_TABLE_HEADER: IDataTableHeader[] = [
  {
    key: 'name',
    title: 'Name',
    type: 'text'
  },
  {
    key: 'email',
    title: 'Email',
    type: 'text'
  },
  {
    key: 'phone',
    title: 'Phone',
    type: 'text',
    width: '150px'
  },
  {
    key: 'location',
    title: 'Location',
    type: 'text',
    width: '250px'
  },
  // {
  //   key: 'company',
  //   title: 'Company',
  //   type: 'text'
  // },
  // {
  //   key: 'designation',
  //   title: 'Designation',
  //   type: 'text'
  // },
  {
    key: 'product_model',
    title: 'Product Model',
    type: 'text'
  },
  {
    key: 'status',
    title: 'Status',
    type: 'jsx'
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "view",
        display: 'icon',
        icon: 'view',
        text: "view",
      },

    ]
  }
]

export const BROCHURE_TABLE_HEADER: IDataTableHeader[] = [
  {
    key: 'name',
    title: 'Name',
    type: 'text'
  },
  {
    key: 'email',
    title: 'Email',
    type: 'text'
  },
  {
    key: 'phone',
    title: 'Phone',
    type: 'text',
    width: '150px'
  },
  {
    key: 'product_model',
    title: 'Product Model',
    type: 'text'
  }
]