import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { useQuery } from 'react-query';
import { IUser } from './types/types';

const ListUsers = () => {
    const { data, isLoading, error } = useQuery('users', () => {
        return axios.get('https://reqres.in/api/users?page=1').then(response => response.data.data);
    }, {
        retry: 5,
        refetchOnWindowFocus: true,
        refetchInterval: 5000,
    });


    if (isLoading) {
        return <div>Carregando...</div>
    }

    if (error) {
        <div>Algo deu errado...</div>
    }
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">E-mail</TableCell>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">SobreNome</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((user: IUser) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='center'>
                                {user.id}
                            </TableCell>
                            <TableCell align='center'>
                                {user.email}
                            </TableCell>
                            <TableCell align='center'>
                                {user.first_name}
                            </TableCell>
                            <TableCell align='center'>
                                {user.last_name}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListUsers;