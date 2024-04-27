export const contactUsColumn = [
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
    title: "Email",
    key: "email",
    type: "data"
  },
  {
    title: "Phone",
    key: "phone",
    type: "data",
  },
  ,
  {
    title: "Message",
    key: "message",
    type: "data",
  },
  ,
  {
    title: "Responded",
    key: "is_responded",
    type: "boolean",
    values: {
      true: "Yes",
      false: "No"
    }
  },
  {
    title: "Action",
    key: "action",
    type: "action",
    actions: [
      {
        type: "respond",
        title: "Respond",
        color: "red"
      }
    ]
  }
]