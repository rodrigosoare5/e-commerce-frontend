import React, { useState } from "react";

// React-Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

import apiSettings from "../../utils/product";
import Footer from "../../components/Footer";

const ProductForm = ({ auth }) => {

    const [data, setData] = useState({
        name: "",
        description: "",
        price: 0.0,
        quantity: 0,
        image: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        image: "",
    });


    const handleChange = ({ currentTarget: input }) => {
        let newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
    };

    const handleImageChange = (e) => {
        let newData = { ...data };
        newData["image"] = e.target.files[0];
        setData(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await apiSettings.createListing(data);
        if (response.status === 400) {
            setErrors(response.data);
        }
        if (response.status === 201 || response.status === 200) {
            setData(
                {
                    name: "",
                    description: "",
                    price: 0.0,
                    quantity: 0,
                    image: "",
                }
            )
        }
    };

    return (
        <Container >
            <h1 className="display-3 text-center">Publicar Produtos</h1>
            <Form style={{ width: "75%", paddingLeft: "25%" }} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group className="mb-3" controlId="titleInput">
                        <Form.Label>Nome do produto</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={data.name}
                            isInvalid={errors.name}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            maxLength={80}
                        />
                        {errors.name && (
                            <Form.Text className="alert-danger" tooltip>
                                {errors.name}
                            </Form.Text>
                        )}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="titleInput">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            step="0.01"
                            value={data.price}
                            isInvalid={errors.price}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            maxLength={80}
                        />
                        {errors.price && (
                            <Form.Text className="alert-danger" tooltip>
                                {errors.price}
                            </Form.Text>
                        )}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="titleInput">
                        <Form.Label>Quantidade no estoque</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantity"
                            value={data.quantity}
                            isInvalid={errors.quantity}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            maxLength={80}
                        />
                        {errors.quantity && (
                            <Form.Text className="alert-danger" tooltip>
                                {errors.quantity}
                            </Form.Text>
                        )}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Foto do produto</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            accept="image/jpeg,image/png,image/gif"
                            onChange={(e) => {
                                handleImageChange(e);
                            }}
                        />
                        {errors.image && (
                            <Form.Text className="alert-danger" tooltip>
                                {errors.image}
                            </Form.Text>
                        )}
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="descriptionInput">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="description"
                        value={data.description}
                        isInvalid={errors.description}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    {errors.description && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.description}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                >
                    Publicar
                </Button>
            </Form>
            <Footer />
        </Container>
    );
};

export default ProductForm;