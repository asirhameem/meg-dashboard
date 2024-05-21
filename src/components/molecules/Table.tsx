import { TablePreloader } from "../templates/preloader"
type Prop = {
  column: any,
  data: any,
  isLoading: boolean,
  action?: any

}
const Table = ({ column, data, isLoading, action }: Prop) => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              className="inline-block min-w-full rounded-lg overflow-hidden"
            >
              {
                isLoading ? (
                  <TablePreloader />
                ) : (
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        {
                          column.map((item: any, index: number) => {
                            return (
                              <th
                                key={index}
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                {item.title}
                              </th>
                            )
                          })
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((row: any, rowIndex: number) => {
                          return (
                            <tr key={rowIndex}>
                              {
                                column.map((col: any, index: number) => {
                                  return (
                                    <td
                                      key={index}
                                      className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                      {
                                        col.type === "index" ? (
                                          <p className="text-gray-900 whitespace-no-wrap">
                                            {rowIndex + 1}
                                          </p>
                                        ) : ""
                                      }
                                      {
                                        col.type === "data" ? (
                                          <p className="text-gray-900 whitespace-no-wrap">
                                            {row[col.key]}
                                          </p>
                                        ) : ""
                                      }
                                      {
                                        col.type === "boolean" ? (
                                          <p className="text-gray-900 whitespace-no-wrap">
                                            {col?.values?.[row?.[col?.key]]}
                                          </p>
                                        ) : ""
                                      }
                                      {
                                        col.type === "action" ? (
                                          <div>
                                            {
                                              col?.actions?.map((actionType: any, index: number) => {
                                                const className = `bg-${actionType.color}-900 hover:bg-${actionType.color}-600 text-white font-bold py-1 px-2 rounded`
                                                return (
                                                  <button
                                                    key={index}
                                                    className={className}
                                                    onClick={() => action.onClick({ data: row, type: actionType.type })}
                                                  >
                                                    {actionType.title}
                                                  </button>
                                                )
                                              })
                                            }
                                          </div>
                                        ) : ""
                                      }
                                    </td>
                                  )
                                })
                              }
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>

                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Table;