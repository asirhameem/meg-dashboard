export const productRow = ({ element, index, func }) => {
  return {
    sl: index + 1,
    model: element.model,
    title: element.title,
    is_active: element.is_active,
  }
}