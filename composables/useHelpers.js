import {useCookie} from "#app";

export function useHelpers() {

    const toBRL = (value) => {
        if (typeof value === "string") value = parseFloat(value)
        return (value || 0).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
    const normalizeString = (text) => {
        return text
            ? text.toString().toLowerCase().normalize("NFD")
            : ''
    }
    const cleanAttributes = (obj) => {
        if (Array.isArray(obj)) {
            return obj
                .map(item => cleanAttributes(item))
                .filter(item => item != null && item !== "" &&
                    (typeof item !== 'object' || Object.keys(item).length > 0));
        } else if (typeof obj === 'object' && obj !== null) {
            Object.entries(obj).forEach(([key, value]) => {
                obj[key] = cleanAttributes(value);
                if (obj[key] == null || obj[key] === "" || (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0)) {
                    delete obj[key];
                }
            });
            return obj;
        }
        return obj;
    }

    return {
        toBRL,
        normalizeString,
        cleanAttributes,
    }
}
