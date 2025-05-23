import { useParams, useNavigate } from 'react-router-dom';

export const validateProjectId = (id: string): boolean => {
    // Check if ID is a valid format (you can customize this based on your needs)
    const isValidFormat = /^[a-zA-Z0-9-_]+$/.test(id);

    // Check if ID is not empty
    const isNotEmpty = id.trim().length > 0;

    // Check if ID is not too long (adjust max length as needed)
    const isNotTooLong = id.length <= 50;

    return isValidFormat && isNotEmpty && isNotTooLong;
};

export const useProtectedId = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!id || !validateProjectId(id)) {
        // Redirect to 404 or home page if ID is invalid
        navigate('/');
        return null;
    }

    return id;
}; 