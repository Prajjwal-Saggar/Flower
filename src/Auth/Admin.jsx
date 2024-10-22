import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = ({order}) => {
  const navigate = useNavigate();

  // Mock data for ordered flowers with real image URLs
//   const orderedFlowers = [
//     { id: 1, name: 'Red Rose', quantity: 5, price: 25, image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
//     { id: 2, name: 'Sunflower', quantity: 3, price: 15, image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
//     { id: 3, name: 'Tulip', quantity: 7, price: 35, image: 'https://images.unsplash.com/photo-1554220311-5e2d0df1c8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
//   ];

  const handleLogout = () => {
    // Implement logout logic here
    // For now, we'll just navigate to the home page
    navigate('/');
  };



  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-150 ease-in-out"
          >
            Logout
          </button>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Ordered Flowers</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {order.map((flower ,key) => (
                <div key={key} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-24 w-24 rounded-md object-cover" src={flower.image} alt={flower.name} />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{flower.product}</dt>
                          <dd className="text-base font-medium text-gray-900">Quantity: {flower.quantity}</dd>
                          <dd className="text-base font-medium text-indigo-600">Total: ${flower.totalPrice}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admin
