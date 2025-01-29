import React from 'react';
import { WebDevelopmentPage, UIUXDesignPage, GraphicsDesignPage, DigitalMarketingPage } from '../components/ServiceLayout';
import { useParams } from 'react-router-dom';

function ServiceDesc() {
    const { serviceId } = useParams(); // Extracts the parameter (ensure your route uses ":serviceId")
    const positionIndex = parseInt(serviceId, 10);

    const services = [
        WebDevelopmentPage, 
        UIUXDesignPage, 
        GraphicsDesignPage, 
        DigitalMarketingPage
    ];

    // Check if index is valid before rendering
    const SelectedService = services[positionIndex];

    return (
        <>
            {SelectedService ? <SelectedService /> : <p>Service not found</p>}
        </>
    );
}

export default ServiceDesc;
