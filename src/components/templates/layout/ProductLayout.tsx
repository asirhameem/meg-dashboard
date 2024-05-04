import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { H1 } from '../../atoms';

const TABS = [
  { name: 'Details', path: 'details' },
  { name: 'Interior', path: 'interior' },
  { name: 'Specification', path: 'specification' },
];

const ProductLayout = () => {
  const { slug } = useParams();
  const location = useLocation();
  const lastPath = location.pathname.split('/').pop();

  return (
    <>
      <H1 className="text-center">Product Details</H1>
      <div data-controller="tabs" data-tabs-index-value="0" className="mx-6 mt-6">
        <ul className="flex flex-wrap border-b border-gray-200">
          {
            TABS.map((tab, index) => (
              <li key={index} className={`mr-2 rounded-t-lg ${tab.path === lastPath && 'bg-primary'}`} data-action="click->tabs#change" data-tabs-target="tab">
                <Link to={`/products/${slug}/${tab.path}`} className={`inline-block ${tab.path === lastPath ? 'text-white' : 'text-blue-600'} rounded-t-lg py-3 px-3 text-sm font-medium text-center`}>{tab.name}</Link>
              </li>
            ))
          }
        </ul>
        <div className="px-1 py-2" data-tabs-target="panel">
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default ProductLayout;