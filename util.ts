export async function getFormEntries(event: any): Promise<IterableIterator<[string, FormDataEntryValue]>> {
    const formData = new FormData(event.target);
    return formData.entries();
}