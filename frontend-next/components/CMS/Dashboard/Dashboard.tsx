import React from 'react'
import AdminTitle from '../../../common/AdminTitle/AdminTitle'
import { useListForHomeQuery } from '../../../api/banners.api'
import { useListAllQuery } from '../../../api/product.api'
import { useListOrderForAdminQuery } from '../../../api/order.api'
import { useSalesOverviewQuery, useOrderStatusQuery, useSalesTrendQuery, useTopProductsQuery } from '../../../api/sales.api'
import { usePageViewsQuery, useSessionDurationQuery, useTopPagesQuery, useVisitorsOverviewQuery } from '../../../api/page.api'
import { Link } from 'react-router-dom'
// import { useListCollectionAllQuery } from '../../../api/collection.api'



const Dashboard = () => {
  const {data:bannersData} = useListForHomeQuery({})
  const bannersCount = bannersData?.result?.length || 0
  
  const {data:productsData} = useListAllQuery({})
  const productsCount = productsData?.meta?.total || 0

  const {data:pendingOrdersData} = useListOrderForAdminQuery({})
  const totalOrdersCount = pendingOrdersData?.meta?.total || 0

  // Sales Analytics Data
  const {data:salesOverviewData, isLoading:salesLoading} = useSalesOverviewQuery({})
  const salesOverview = salesOverviewData?.result || {}

  const {data:orderStatusData, isLoading:orderStatusLoading} = useOrderStatusQuery({})
  const orderStatus = orderStatusData?.result || {}

  // Sales Trend Data
  const {data:salesTrendData, isLoading:trendLoading} = useSalesTrendQuery({})
  const salesTrend = salesTrendData?.result || {}

  // Top Products Data
  const {data:topProductsData, isLoading:productsLoading} = useTopProductsQuery({})
  const topProducts = topProductsData?.result || {}
  console.log('topProducts',topProductsData);

  // Page Analytics Data
  const {data:pageViewsData, isLoading:pageViewsLoading} = usePageViewsQuery({})
  const pageViews = pageViewsData?.result || []

  const {data:sessionDurationData, isLoading:sessionLoading} = useSessionDurationQuery({})
  const sessionDuration = sessionDurationData?.result?.[0] || {}

  const {data:topPagesData, isLoading:topPagesLoading} = useTopPagesQuery({})
  const topPages = topPagesData?.result || []

  const {data:visitorsData, isLoading:visitorsLoading} = useVisitorsOverviewQuery({})
  const visitors = visitorsData?.result || {}

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0)
  }

  // Format numbers with commas
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num || 0)
  }

  // Format duration to readable format
  const formatDuration = (seconds) => {
    if (!seconds) return '0s'
    if (seconds < 60) return `${Math.round(seconds)}s`
    if (seconds < 3600) return `${Math.round(seconds / 60)}m ${Math.round(seconds % 60)}s`
    return `${Math.round(seconds / 3600)}h ${Math.round((seconds % 3600) / 60)}m`
  }

  return (
    <div className='admin_margin_box'> 
      <AdminTitle /> 
      
      {/* Sales Overview Section */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{marginBottom: '20px', color: '#333'}}>Sales Analytics</h2>
        <div className="dashboard_grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>        
          <div className="dashboard_grid_item" >
            <h2>{salesLoading ? '...' : formatCurrency(salesOverview.totalRevenue)}</h2>
            <p>Total Revenue</p>
          </div>
          <div className="dashboard_grid_item" >
            <h2>{salesLoading ? '...' : formatCurrency(salesOverview.totalProfit)}</h2>
            <p>Total Profit</p>
          </div>
          <div className="dashboard_grid_item" >
            <h2>{salesLoading ? '...' : formatCurrency(salesOverview.totalCost)}</h2>
            <p>Total Cost</p>
          </div>
          <div className="dashboard_grid_item" >
            <h2>{salesLoading ? '...' : formatCurrency(salesOverview.avgOrderValue)}</h2>
            <p>Avg Order Value</p>
          </div>
          <div className="dashboard_grid_item" >
            <h2>{salesLoading ? '...' : formatNumber(salesOverview.totalUnitsSold)}</h2>
            <p>Units Sold</p>
          </div>
        </div>
      </div>

      {/* Order Status Section */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{marginBottom: '20px', color: '#333'}}>Order Status</h2>
        <div className="dashboard_grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px'}}>  
          <Link to="/admin/order_list">      
          <div className="dashboard_grid_item" style={{background: '#ffeaa7', color: '#2d3436'}}>
            <h1>{orderStatusLoading ? '...' : orderStatus.pending}</h1>
            <p>Pending Orders</p>
          </div>
          </Link>
          <Link to="/admin/order_list">
          <div className="dashboard_grid_item" style={{background: '#74b9ff', color: 'white'}}>
            <h1>{orderStatusLoading ? '...' : orderStatus.shipped}</h1>
            <p>Shipped Orders</p>
          </div>
          </Link>
          <Link to="/admin/order_list">
          <div className="dashboard_grid_item" style={{background: '#00b894', color: 'white'}}>
            <h1>{orderStatusLoading ? '...' : orderStatus.delivered}</h1>
            <p>Delivered Orders</p>
          </div>
          </Link>
          <Link to="/admin/order_list">
          <div className="dashboard_grid_item" style={{background: '#e17055', color: 'white'}}>
            <h1>{orderStatusLoading ? '...' : orderStatus.canceled}</h1>
            <p>Cancelled Orders</p>
          </div>
          </Link>
          <Link to="/admin/order_list">
          <div className="dashboard_grid_item">
            <h1>{totalOrdersCount}</h1>
            <p>Total Orders</p>
          </div>
          </Link>
        </div>
      </div>

      {/* Sales Trend Section */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{marginBottom: '20px', color: '#333'}}>Sales Trends</h2>
        {trendLoading ? (
          <div style={{textAlign: 'center', padding: '20px'}}>Loading trends...</div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
            {/* Today vs Yesterday */}
            <div style={{
              background: 'white', 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{marginBottom: '15px', color: '#333'}}>Daily Comparison</h3>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Today:</span>
                <strong>{formatCurrency(salesTrend.today?.totalRevenue)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Yesterday:</span>
                <strong>{formatCurrency(salesTrend.yesterday?.totalRevenue)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Growth:</span>
                <strong style={{color: salesTrend.growth?.dailyRevenueDifference >= 0 ? '#00b894' : '#e17055'}}>
                  {salesTrend.growth?.dailyGrowthPercentage || '0%'}
                </strong>
              </div>
              <div style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                Orders: {salesTrend.today?.totalOrders || 0} today vs {salesTrend.yesterday?.totalOrders || 0} yesterday
              </div>
            </div>

            {/* This Week */}
            <div style={{
              background: 'white', 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{marginBottom: '15px', color: '#333'}}>This Week</h3>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Revenue:</span>
                <strong>{formatCurrency(salesTrend.thisWeek?.totalRevenue)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Profit:</span>
                <strong>{formatCurrency(salesTrend.thisWeek?.totalProfit)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Orders:</span>
                <strong>{formatNumber(salesTrend.thisWeek?.totalOrders)}</strong>
              </div>
              <div style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                Avg Order Value: {formatCurrency(salesTrend.thisWeek?.avgOrderValue)}
              </div>
            </div>

            {/* This Month */}
            <div style={{
              background: 'white', 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{marginBottom: '15px', color: '#333'}}>This Month</h3>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Revenue:</span>
                <strong>{formatCurrency(salesTrend.thisMonth?.totalRevenue)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Profit:</span>
                <strong>{formatCurrency(salesTrend.thisMonth?.totalProfit)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>Orders:</span>
                <strong>{formatNumber(salesTrend.thisMonth?.totalOrders)}</strong>
              </div>
              <div style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                Units Sold: {formatNumber(salesTrend.thisMonth?.totalUnitsSold)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Top Products Section */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{marginBottom: '20px', color: '#333'}}>Top Products</h2>
        {productsLoading ? (
          <div style={{textAlign: 'center', padding: '20px'}}>Loading products...</div>
        ) : (
          <div style={{
            background: 'white', 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px', 
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{padding: '20px', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{margin: 0, color: '#333'}}>Best Performing Products</h3>
                <div style={{fontSize: '14px', color: '#666'}}>
                  {topProducts.summary?.totalProductsSold || 0} products sold
                </div>
              </div>
            </div>
            <div style={{overflowX: 'auto'}}>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{background: '#f8f9fa'}}>
                    <th style={{padding: '12px', textAlign: 'left', borderBottom: '1px solid #e0e0e0'}}>Rank</th>
                    <th style={{padding: '12px', textAlign: 'left', borderBottom: '1px solid #e0e0e0'}}>Product Name</th>
                    <th style={{padding: '12px', textAlign: 'right', borderBottom: '1px solid #e0e0e0'}}>Units Sold</th>
                    <th style={{padding: '12px', textAlign: 'right', borderBottom: '1px solid #e0e0e0'}}>Revenue</th>
                    <th style={{padding: '12px', textAlign: 'right', borderBottom: '1px solid #e0e0e0'}}>Profit</th>
                    <th style={{padding: '12px', textAlign: 'right', borderBottom: '1px solid #e0e0e0'}}>Profit %</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.products?.slice(0, 10).map((product, index) => (
                    <tr key={product.productId} style={{borderBottom: '1px solid #f0f0f0'}}>
                      <td style={{padding: '12px'}}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: index < 3 ? '#ffd700' : '#e0e0e0',
                          color: index < 3 ? '#fff' : '#666',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          {index + 1}
                        </div>
                      </td>
                      <td style={{padding: '12px'}}>
                        <div style={{fontWeight: '500'}}>{product.productName}</div>
                        <div style={{fontSize: '12px', color: '#666'}}>ID: {product.productId.slice(-8)}</div>
                      </td>
                      <td style={{padding: '12px', textAlign: 'right', fontWeight: '500'}}>
                        {formatNumber(product.unitsSold)}
                      </td>
                      <td style={{padding: '12px', textAlign: 'right', fontWeight: '500', color: '#00b894'}}>
                        {formatCurrency(product.revenue)}
                      </td>
                      <td style={{padding: '12px', textAlign: 'right', fontWeight: '500', color: '#667eea'}}>
                        {formatCurrency(product.profit)}
                      </td>
                      <td style={{padding: '12px', textAlign: 'right'}}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: '500',
                          background: product.profitMargin > 50 ? '#d4edda' : product.profitMargin > 25 ? '#fff3cd' : '#f8d7da',
                          color: product.profitMargin > 50 ? '#155724' : product.profitMargin > 25 ? '#856404' : '#721c24'
                        }}>
                          {product.profitMargin}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {topProducts.products?.length > 10 && (
              <div style={{padding: '15px', textAlign: 'center', background: '#f8f9fa', fontSize: '14px', color: '#666'}}>
                Showing top 10 of {topProducts.products.length} products
              </div>
            )}
          </div>
        )}
      </div>

      {/* Page Analytics Section */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{marginBottom: '20px', color: '#333'}}>Page Analytics</h2>
        
        {/* Visitors Overview Cards */}
        <div className="dashboard_grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px'}}>
          <div className="dashboard_grid_item" style={{background: '#667eea', color: 'white'}}>
            <h1>{visitorsLoading ? '...' : visitors.totalVisitors || 0}</h1>
            <p>Total Visitors</p>
          </div>
          <div className="dashboard_grid_item" style={{background: '#00b894', color: 'white'}}>
            <h1>{visitorsLoading ? '...' : visitors.newVisitors || 0}</h1>
            <p>New Visitors</p>
          </div>
          <div className="dashboard_grid_item" style={{background: '#ffeaa7', color: '#2d3436'}}>
            <h1>{visitorsLoading ? '...' : visitors.returningVisitors || 0}</h1>
            <p>Returning Visitors</p>
          </div>
          <div className="dashboard_grid_item" style={{background: '#74b9ff', color: 'white'}}>
            <h1>{sessionLoading ? '...' : formatDuration(sessionDuration.avgDuration)}</h1>
            <p>Avg Session Duration</p>
          </div>
        </div>

        {/* Session Duration Details */}
        <div style={{
          background: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px', 
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{marginBottom: '20px', color: '#333'}}>Session Duration Analytics</h3>
          {sessionLoading ? (
            <div style={{textAlign: 'center', padding: '20px'}}>Loading session data...</div>
          ) : sessionDuration.avgDuration !== undefined ? (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
              <div style={{textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '8px'}}>
                <div style={{fontSize: '24px', fontWeight: 'bold', color: '#74b9ff', marginBottom: '5px'}}>
                  {formatDuration(sessionDuration.avgDuration)}
                </div>
                <div style={{fontSize: '14px', color: '#666'}}>Average Duration</div>
              </div>
              <div style={{textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '8px'}}>
                <div style={{fontSize: '24px', fontWeight: 'bold', color: '#00b894', marginBottom: '5px'}}>
                  {formatDuration(sessionDuration.maxDuration)}
                </div>
                <div style={{fontSize: '14px', color: '#666'}}>Longest Session</div>
              </div>
              <div style={{textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '8px'}}>
                <div style={{fontSize: '24px', fontWeight: 'bold', color: '#e17055', marginBottom: '5px'}}>
                  {formatDuration(sessionDuration.minDuration)}
                </div>
                <div style={{fontSize: '14px', color: '#666'}}>Shortest Session</div>
              </div>
            </div>
          ) : (
            <div style={{textAlign: 'center', padding: '20px', color: '#666'}}>
              No session data available
            </div>
          )}
        </div>

        {/* Top Pages Table */}
        <div style={{
          background: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px', 
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <div style={{padding: '20px', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa'}}>
            <h3 style={{margin: 0, color: '#333'}}>Most Visited Pages</h3>
          </div>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{background: '#f8f9fa'}}>
                  <th style={{padding: '12px', textAlign: 'left', borderBottom: '1px solid #e0e0e0'}}>Rank</th>
                  <th style={{padding: '12px', textAlign: 'left', borderBottom: '1px solid #e0e0e0'}}>Page</th>
                  <th style={{padding: '12px', textAlign: 'right', borderBottom: '1px solid #e0e0e0'}}>Total Views</th>
                  <th style={{padding: '12px', textAlign: 'center', borderBottom: '1px solid #e0e0e0'}}>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {topPagesLoading ? (
                  <tr>
                    <td colSpan="4" style={{padding: '20px', textAlign: 'center'}}>Loading...</td>
                  </tr>
                ) : topPages.length > 0 ? (
                  topPages.slice(0, 10).map((page, index) => (
                    <tr key={page._id} style={{borderBottom: '1px solid #f0f0f0'}}>
                      <td style={{padding: '12px'}}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: index < 3 ? '#667eea' : '#e0e0e0',
                          color: index < 3 ? '#fff' : '#666',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          {index + 1}
                        </div>
                      </td>
                      <td style={{padding: '12px'}}>
                        <div style={{fontWeight: '500'}}>{page._id || 'Unknown'}</div>
                        <div style={{fontSize: '12px', color: '#666'}}>
                          {page._id === '/' ? 'Homepage' : 
                           page._id.includes('/product') ? 'Product Page' :
                           page._id.includes('/collection') ? 'Collection Page' :
                           page._id.includes('/cart') ? 'Cart Page' : 'Other'}
                        </div>
                      </td>
                      <td style={{padding: '12px', textAlign: 'right', fontWeight: '500'}}>
                        {formatNumber(page.totalViews)}
                      </td>
                      <td style={{padding: '12px', textAlign: 'center'}}>
                        <div style={{
                          width: '100%',
                          height: '8px',
                          background: '#e0e0e0',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${Math.min((page.totalViews / Math.max(...topPages.map(p => p.totalViews))) * 100, 100)}%`,
                            height: '100%',
                            background: index < 3 ? '#667eea' : '#74b9ff',
                            borderRadius: '4px'
                          }}></div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{padding: '20px', textAlign: 'center', color: '#666'}}>
                      No page analytics data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Page Views Chart (Simple Bar Chart using CSS) */}
        <div style={{
          background: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px', 
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{marginBottom: '20px', color: '#333'}}>Page Views Distribution</h3>
          {pageViewsLoading ? (
            <div style={{textAlign: 'center', padding: '20px'}}>Loading chart...</div>
          ) : pageViews.length > 0 ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {pageViews.slice(0, 8).map((page, index) => {
                const maxViews = Math.max(...pageViews.map(p => p.totalViews));
                const percentage = (page.totalViews / maxViews) * 100;
                
                return (
                  <div key={page._id} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <div style={{minWidth: '120px', fontSize: '12px', color: '#666'}}>
                      {page._id.length > 15 ? page._id.substring(0, 15) + '...' : page._id}
                    </div>
                    <div style={{
                      flex: 1,
                      height: '24px',
                      background: '#f0f0f0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{
                        width: `${percentage}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${index < 3 ? '#667eea' : '#74b9ff'}, ${index < 3 ? '#764ba2' : '#667eea'})`,
                        borderRadius: '12px',
                        transition: 'width 0.5s ease'
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '11px',
                        fontWeight: '500',
                        color: percentage > 50 ? 'white' : '#333'
                      }}>
                        {formatNumber(page.totalViews)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{textAlign: 'center', padding: '20px', color: '#666'}}>
              No page views data available
            </div>
          )}
        </div>
      </div>

      {/* General Statistics Section */}
      <div>
        <h2 style={{marginBottom: '20px', color: '#333'}}>General Statistics</h2>
        <div className="dashboard_grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px'}}>        
          <Link to="/admin/product">
          <div className="dashboard_grid_item">
            <h1>{productsCount}</h1>
            <p>Total Products</p>
          </div>
          </Link>
          <Link to="/admin/banners">
          <div className="dashboard_grid_item">
            <h1>{bannersCount}</h1>
            <p>Active Banners</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard