'use client'
import AdminTitle from '../AdminTitle/AdminTitle'
import { usePageViewsQuery, useSessionDurationQuery, useTopPagesQuery, useVisitorsOverviewQuery } from '../../api/page.api'


const Dashboard = () => {


  // Page Analytics Data
  const {data:pageViewsData, isLoading:pageViewsLoading} = usePageViewsQuery({})
  const pageViews = pageViewsData?.result || []

  const {data:sessionDurationData, isLoading:sessionLoading} = useSessionDurationQuery({})
  const sessionDuration = sessionDurationData?.result?.[0] || {}

  const {data:topPagesData, isLoading:topPagesLoading} = useTopPagesQuery({})
  const topPages = topPagesData?.result || []

  const {data:visitorsData, isLoading:visitorsLoading} = useVisitorsOverviewQuery({})
  const visitors = visitorsData?.result || {}

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num || 0)
  }

 // Format duration to readable format
 const formatDuration = (seconds: number) => {
  if (!seconds) return '0s'
  if (seconds < 60) return `${Math.round(seconds)}s`
  if (seconds < 3600) return `${Math.round(seconds / 60)}m ${Math.round(seconds % 60)}s`
  return `${Math.round(seconds / 3600)}h ${Math.round((seconds % 3600) / 60)}m`
}

  return (
    <div className='admin_margin_box'> 
      <AdminTitle url="/dashboard" label1="Dashboard" label2="Dashboard" /> 
      

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
                    <td colSpan={4} style={{padding: '20px', textAlign: 'center'}}>Loading...</td>
                  </tr>
                ) : topPages.length > 0 ? (
                  topPages.slice(0, 10).map((page: any, index: number) => (
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
                            width: `${Math.min((page.totalViews / Math.max(...topPages.map((p: any) => p.totalViews))) * 100, 100)}%`,
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
                    <td colSpan={4} style={{padding: '20px', textAlign: 'center', color: '#666'}}>
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
              {pageViews.slice(0, 8).map((page: any, index: number) => {
                const maxViews = Math.max(...pageViews.map((p: any) => p.totalViews));
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
    </div>
  )
}

export default Dashboard