async function GetContent(fileName) {
    try {
        const response = await fetch(fileName);
    
        if (!response.ok) {
        throw new Error(`Failed to fetch the file. Status: ${response.status}`);
        }
    
        const jsonArray = await response.json();
        return jsonArray;
    } catch (error) {
        console.error('Error fetching or parsing the file:', error);
        throw error;
    }
}