export const paintColumn = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Name",
    key: "name",
    type: "data"
  },
  {
    title: "Hex Code",
    key: "hex",
    type: "data"
  },
  {
    title: "Image",
    key: "image",
    type: "data"
  },
  {
    title: "Status",
    key: "is_active",
    type: "boolean",
    values: {
      true: "Active",
      false: "Inactive"
    }
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "paint",
        title: "Add",
        color: "primary"
      },
      {
        type: "paint",
        title: "Delete",
        color: "red"
      }
    ]
  }
]