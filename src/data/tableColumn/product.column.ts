export const productColumn = [
  {
    title: "SL",
    key: "id",
    type: "index"
  },
  {
    title: "Model",
    key: "model",
    type: "data"
  },
  {
    title: "Title",
    key: "title",
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
        type: "specification",
        title: "Specification",
        color: "red"
      }
    ]
  }
]