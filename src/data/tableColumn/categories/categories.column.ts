export const categoryColumn = [
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
    title: "Slug",
    key: "slug",
    type: "data"
  },
  {
    title: "Description",
    key: "description",
    type: "data"
  },
  {
    title: "Visibility",
    key: "is_visible",
    type: "boolean",
    values: {
      true: "Active",
      false: "Inactive"
    }
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
        type: "category",
        title: "Add",
        color: "primary"
      },
      {
        type: "category",
        title: "Delete",
        color: "red"
      }
    ]
  }
]