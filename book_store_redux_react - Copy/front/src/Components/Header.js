import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { DLT } from '../redux/actions/action';

const Header = () => {
    const [price, setPrice] = useState(0);
    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata)
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.forEach((ele) => {
            price += ele.price * ele.qnty;
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [getdata]);

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <h5 style={{ color: 'white', fontSize: "2rem" }} className="mx-3">Book Store</h5>
                    {auth ? (
                        <Nav className="me-auto">
                            <Link to="/" className="text-decoration-none mx-3" style={{ color: 'white' }}>Home</Link>
                            <Link to="/category/:genre" className="text-decoration-none mx-3" style={{ color: 'white' }}>Categories</Link>
                            <Link to="/pricing" className="text-decoration-none mx-3" style={{ color: 'white' }}>Pricing</Link>
                            <Link onClick={logout} className="text-decoration-none mx-3" style={{ color: 'white' }} to="/signup">Logout ({JSON.parse(auth).name})</Link>
                        </Nav>
                    ) : (
                        <div className='nav-ul nav-right'>
                            <Link className="text-decoration-none mx-3" style={{ color: 'white' }} to="/signup">Sign Up</Link>
                            <Link className="text-decoration-none mx-3" style={{ color: 'white' }} to="/login">Login</Link>
                        </div>
                    )}
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ? (
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => (
                                                <tr key={e.id}>
                                                    <td>
                                                        <Link to={`/cart/${e.id}`} onClick={handleClose}>
                                                            <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt='' />
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <p>{e.rname}</p>
                                                        <p>Price: ₹ {e.price}</p>
                                                        <p>Quantity: {e.qnty}</p>
                                                        <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                            <i className='fas fa-trash smalltrash'></i>
                                                        </p>
                                                    </td>
                                                    <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                        <i className='fas fa-trash'></i>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        <p className='text-center'>Total: ₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div>
                        ) : (
                            <div className="card_details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your cart is empty</p>
                                <img src="./cart.gif" alt="" className='empty-card_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                        )
                    }
                </Menu>
            </Navbar>
        </>
    )
}

export default Header;
