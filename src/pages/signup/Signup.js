import React, { useState } from "react"
import useAxios from "../../utils/axios"
import { useNavigate } from "react-router-dom"

export default function ({ setAuth }) {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })

    const navigate = useNavigate()

    const executar_login = () => {
        useAxios
            .post('api/token/', {
                username: state.username,
                password: state.password,

            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access)
                localStorage.setItem('refresh_token', response.data.refresh)
                useAxios.defaults.headers['Authorization'] =
                    `JWT ${localStorage.getItem('access_token')}`

            }).then(() => {
                setAuth(true)
                navigate('/')
            })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(state)
            useAxios
                .post('api/signup/',
                    JSON.stringify(state)
                )
                .then(() => {
                    executar_login()
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
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Cadastro</h3>
                    <div className="text-center">
                        Possui login?{" "}
                        <button className="link-primary" >
                            Login
                        </button>
                    </div>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control mt-1"
                            placeholder="Username"
                            defaultValue={state.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                            defaultValue={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Senha</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Senha"
                            defaultValue={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirmar senha</label>
                        <input
                            name="password2"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Confirmar senha"
                            defaultValue={state.password2}
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