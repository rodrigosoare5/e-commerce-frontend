import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useAxios from '../../utils/axios';

export default function ({ setAuth }) {
    const [state, setState] = useState({
        username: '',
        password: '',
        
    })
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()


        useAxios
            .post('api/token/',
                JSON.stringify(state)
            )
            .then((response) => {
                localStorage.setItem('access_token', response.data.access)
                localStorage.setItem('refresh_token', response.data.refresh)
                useAxios.defaults.headers['Authorization'] =
                    `JWT ${localStorage.getItem('access_token')}`
                setAuth(true)
                navigate('/')
            })

    }
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value

        });
    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit} >
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
                    <div className="text-center">
                        Não é registrado?
                        <button className="link-primary">
                            <a href='/signup'>Registre-se</a>
                        </button>
                    </div>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control mt-1"
                            placeholder="Username"
                            defaultValue={state.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Senha</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Insira a senha"
                            defaultValue={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}