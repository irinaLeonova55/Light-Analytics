//const BASE_URL = 'https://lightanalytics.ru/api-v2/promo/command';

const BASE_URL = 'http://localhost:8855/api-v2/promo/command';

/**
 * Модель запроса: CreateDemoRequestWebRequest
 * @param {Object} data - { name, phone, email, telegram }
 */
export const createDemoRequest = async (data) => {
    const response = await fetch(`${BASE_URL}/demo-request/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Ошибка при отправке заявки');
    }

    return response.json(); // Возвращает SuccessResponse<UUID>
};