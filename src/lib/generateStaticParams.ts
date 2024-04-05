import {Supplier} from "@/lib/data";
export async function generateStaticParams(): Promise<{ id: number }[]> {
    try {
        // Fetch interfaces data from the API
        const response = await fetch('http://localhost:8080/api/supplier');

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch interfaces data');
        }

        // Parse the response body as JSON
        const suppliers: Supplier[] = await response.json();

        // Extract the IDs and return as an array of objects
        return suppliers.map((supplier) => ({
            id: supplier.id,
        }));
    } catch (error) {
        console.error('Error fetching interfaces data:', error);
        return []; // Return an empty array or handle the error as needed
    }
}

