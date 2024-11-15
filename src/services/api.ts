export const createBooking = async (data: {
    when: string;
    lanes: number;
    people: number;
    shoes: number[];
}) => {
    const response = await fetch('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', {
        method: 'POST',
        headers: {
            'x-api-key': '738c6b9d-24cf-47c3-b688-f4f4c5747662',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Failed to create booking: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
};
