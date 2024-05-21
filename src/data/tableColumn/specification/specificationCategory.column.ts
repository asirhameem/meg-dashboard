export const specificationCategoryColumn = [
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
        type: "details",
        title: "Details",
        color: "gray"
      }
    ]
  }
]