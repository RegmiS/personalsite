import PocketBase from 'pocketbase';

export const usePocketbase = () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;
    const pb = new PocketBase(baseUrl);
    return pb;
}