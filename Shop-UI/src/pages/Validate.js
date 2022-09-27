export const email = (value) =>
    value && !/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i.test(value)
        ? "Invalid email address"
        : undefined;