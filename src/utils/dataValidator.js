export function dataValidator({ formData, isSignUp, setFormError }) {
    const VALID_NAME_PATTERN = /^[a-zA-Z' -]{2,50}$/;
    const VALID_EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const VALID_PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (isSignUp && !VALID_NAME_PATTERN.test(formData.name)) {
        setFormError((pre => ({
            ...pre,
            name: {
                error: true,
                errorMsg: "Please enter a valid name between 2 and 50 characters, using only letters, spaces, hyphens, or apostrophes."
            }
        })));

        return;
    }

    if (!VALID_EMAIL_PATTERN.test(formData.email)) {
        setFormError((pre => ({
            ...pre,
            email: {
                error: true,
                errorMsg: "Please enter a valid email."
            }
        })));

        return;
    }

    if (isSignUp && !VALID_PASSWORD_PATTERN.test(formData.password)) {
        setFormError((pre => ({
            ...pre,
            password: {
                error: true,
                errorMsg: "Password must be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and symbols."
            }
        })));

        return;
    }
}