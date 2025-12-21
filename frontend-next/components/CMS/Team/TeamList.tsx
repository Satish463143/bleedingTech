'use client'
import { useState } from 'react';
import { useListAllQuery, useDeleteTeamsMutation } from '../../api/team.api';
import { toast } from 'react-toastify';
import AdminTitle from '../AdminTitle/AdminTitle';
import Link from 'next/link';
import LoadingComponent from '../../common/Loading/Loading.component';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import { Pagination } from 'flowbite-react';

const TeamList = () => {
    const [search, setSearch] = useState(''); // Ensure default value is a string
    const [page, setPage] = useState(1);
    const [limit] = useState(10); 

    const {data, error, isLoading} = useListAllQuery({ page, limit, search })
    const [deleteTeam] = useDeleteTeamsMutation()
    const team = data?.details || []

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); // Update the search state
        setPage(1); // Reset to the first page
      };
    
      const handlePageChange = (newPage: number) => {
        setPage(newPage);
      };  
      const truncateContent = (content = '', wordLimit: number) => {
        const words = content.split(' ');
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(' ') + '...'
          : content;
      };    
    
      const deleteData=async(id:string)=>{
        try{
          await deleteTeam(id).unwrap()
          toast.success("team deleted sucessfully")
        }catch(exception){
          toast.error("Cannot delete team at this moment")
        }    
      }
  return (
    <div className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle url='/admin/team' label1=' Team List' label2='' />
        <div className='Dashboard_title'>
          <h1>Team List</h1>
          <div>
          <input
              type="search"
              className="search_btn"
              placeholder="Filter by name..."
              value={search}
              onChange={handleSearchChange}
          />
          <Link href='/admin/add_team'>
            <button className='edit_btn'>Add Team</button>
          </Link>          
          </div>
        </div>
      </div>
      <div className='blog_table'>        
        <table border={2}>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Image</th>
              <th>Name</th>
              <th>Position</th>
              <th>Tagline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>  
                <td colSpan={6}><LoadingComponent/></td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={6} className="error-message">{(error as any)?.data?.message}</td>
              </tr>
            ) : team && team.length > 0 ? (
              team.map((row: any, index: number) => (
                <tr key={index}>
                  <td className="table_sn">{index + 1}</td>
                  <td><img src={row.image} alt={row.name} width={100} height={100} /></td>
                  <td>{row.name}</td>
                  <td>{row.position}</td>
                  <td>{truncateContent(row.tagline, 15)}</td>
                  <td style={{ textAlign: 'center', width: '150px' }}>
                    <EditButton editUrl={`/admin/edit_team?id=${row._id}`}/>
                    <DeleteButton deleteAction={deleteData} rowId={row._id}/>                  
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Team List is Empty</td>
              </tr>
            )}
          </tbody>
        </table>       
        <div className='flex overflow-x-auto sm:justify-center'>
            {data?.meta && data.meta.total > 0 && (
            <div className='flex overflow-x-auto sm:justify-center'>
                <Pagination                
                currentPage={data.meta.currentPage || 1}
                totalPages={Math.ceil(data.meta.total / limit)}
                onPageChange={handlePageChange}
                />
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default TeamList