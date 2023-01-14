export async function getFormEntries(event: any): Promise<any> {
    const formData = new FormData(event.target);
    return formData.entries();
}
