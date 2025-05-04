import React , {useState} from 'react';
import "../assets/styles/styles.css";
const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        role: "",
        organization: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!formData.agreeTerms) {
            alert("Please agree to the Terms & Conditions.");
            return;
        }

        // Handle form submission (e.g., send to backend)
        console.log("Form data:", formData);
        window.location.href = "/signin"; // or use useNavigate from React Router
    };
    return (
        <div id="Signup">
            <div className="right-section">
                <h1>CREATE YOUR ACCOUNT</h1>
                <p>Welcome to SafeSpace, Please register yourself to continue</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Full name *"
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email address *"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            required
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="">Role Selection *</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Organization *"
                            required
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password *"
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password *"
                            required
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="password-tips">
                        <ul>
                            <li>At least 12 characters long but 14 or more is better.</li>
                            <li>
                                A combination of uppercase letters, lowercase letters, numbers,
                                and symbols.
                            </li>
                        </ul>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                required
                            />
                            I agree to the Terms & Conditions
                        </label>
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="register-btn" style={{ width: "90px" }}>
                            Register
                        </button>
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/login")}
                            className="login-btn"
                            style={{ width: "90px" }}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;