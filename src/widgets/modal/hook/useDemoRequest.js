import {useState} from "react";
import {createDemoRequest} from "@/widgets/modal/api/api.js";

export const useDemoRequest = (onSuccess) => {
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [error, setError] = useState(null);

    const sendRequest = async (formData) => {
        setStatus('loading');
        setError(null);

        try {
            const data = Object.fromEntries(formData.entries());
            await createDemoRequest(data);
            setStatus('success');
            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err.message);
            setStatus('error');
        }
    };

    const reset = () => {
        setStatus('idle');
        setError(null);
    };

    return {
        sendRequest,
        reset,
        isLoading: status === 'loading',
        isSuccess: status === 'success',
        error,
        status
    };
};